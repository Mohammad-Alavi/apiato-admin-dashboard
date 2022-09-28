<template>
  <v-container fluid>
    <v-row class="align-content-space-between mb-5">
      <!--      <v-col>-->
      <!--        <ikon-data-export :data="selectedItems" :headers="prepareHeadersForExport()"/>-->
      <!--      </v-col>-->
      <v-col class="text-end">
        <ikon-user-options/>
      </v-col>
    </v-row>
    <v-card flat min-width="100%">
      <validation-observer ref="observer">
        <validation-provider v-slot="{ invalid, errors }" vid="gallery">
          <v-card-text>
            <ikon-gallery-grid-wrapper v-model="images" :useDragHandle="true" axis="xy" @input="reorderGalleryImage"
                                       @sort-end="getDraggedImageIndex">
              <ikon-gallery-grid-item v-for="(image, index) in images" :key="index" :index="index">
                <v-img :lazy-src="`${imgDomainUrl}/${imagePresets.preload}/${image.file}`"
                       :src="`${imgDomainUrl}/${imagePresets.large2048}/${image.file}`" aspect-ratio="1"
                       class="grey lighten-2"
                       max-height="300"
                       max-width="300">
                  <template v-slot:placeholder>
                    <v-row align="center" class="fill-height ma-0" justify="center">
                      <v-progress-circular color="grey lighten-5" indeterminate/>
                    </v-row>
                  </template>
                  <v-btn :loading="manipulatingImage" absolute icon right
                         @click="removeGalleryImage(image.id, index)">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>

                  <v-btn v-handle :loading="manipulatingImage" absolute icon left>
                    <v-icon>mdi-cursor-move</v-icon>
                  </v-btn>
                </v-img>
              </ikon-gallery-grid-item>
            </ikon-gallery-grid-wrapper>
          </v-card-text>
          <v-card-subtitle class="error--text" v-for="(message, i) in errors" :key="i">{{ message }}</v-card-subtitle>
        </validation-provider>
      </validation-observer>
      <v-card-actions>
        <v-spacer/>
        <v-btn :loading="manipulatingImage" color="primary" @click="addFile">
          ADD
        </v-btn>
      </v-card-actions>

      <input ref="fileUploader" accept="image/*" class="d-none" multiple type="file" @change="imageAdded">
    </v-card>
  </v-container>
</template>

<script>
import { HandleDirective } from 'vue-slicksort'
import { ImagePresets } from '@/modules/app/constants/image-presets'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'IkonProviderGalleryPage',
  data () {
    return {
      manipulatingImage: false,
      galleryFiles: null,
      images: [],
      image: null,
      galleryActiveIndex: null,
      imagePresets: ImagePresets
    }
  },
  props: {
    provider: {
      required: true
    }
  },
  directives: { handle: HandleDirective },
  components: {
    IkonGalleryGridWrapper: () => import('@/modules/provider/components/IkonGalleryGridWrapper'),
    IkonGalleryGridItem: () => import('@/modules/provider/components/IkonGalleryGridItem'),
    IkonUserOptions: () => import('@/modules/app/components/IkonUserOptions'),
    ValidationObserver
  },
  computed: {
    imgDomainUrl () {
      return process.env.VUE_APP_IMG_URL
    }
  },
  methods: {
    setServerErrorsOnFormFields (res) {
      if (res.response.data.errors) {
        const errors = res.response.data.errors
        const errorObject = {}
        Object.entries(errors).forEach(([k, v]) => {
          errorObject[k] = v
        })
        this.$refs.observer.setErrors(errorObject)
      }
    },
    addFile (e) {
      const uploader = this.$refs.fileUploader
      uploader.value = ''
      uploader.click()
    },
    imageAdded () {
      const uploader = this.$refs.fileUploader
      const file = Object.values(uploader.files)
      this.addGalleryImage(file[0])
    },
    addGalleryImage (item) {
      this.manipulatingImage = true
      this.$store.dispatch('addGalleryImage', { provider: this.provider, image: item })
        .then(res => {
          this.getAllGalleryImages()
        }).finally(() => {
          this.manipulatingImage = false
        })
    },
    removeGalleryImage (id, index) {
      if (id) {
        this.manipulatingImage = true
        this.$store.dispatch('removeGalleryImage', {
          id,
          provider: this.provider
        }).then(res => {
          this.getAllGalleryImages()
        }).catch(res => {
          console.log('res', res)
          this.setServerErrorsOnFormFields(res)
        }).finally(() => {
          this.manipulatingImage = false
        })
      }
    },
    getAllGalleryImages () {
      this.manipulatingImage = true
      this.$store.dispatch('getAllGalleryImages', { withIncludes: false, provider: this.provider })
        .then(res => {
          this.images = res.items
        }).finally(() => {
          this.manipulatingImage = false
        })
    },
    getDraggedImageIndex (index) {
      this.galleryActiveIndex = index.newIndex
    },
    reorderGalleryImage () {
      this.manipulatingImage = true
      this.$store.dispatch('reorderGalleryImage', {
        provider: this.provider,
        imageId: this.images[this.galleryActiveIndex].id,
        order: this.galleryActiveIndex
      }).then(res => {
        this.getAllGalleryImages()
      }).finally(() => {
        this.manipulatingImage = false
      })
    }
  },
  created () {
    this.getAllGalleryImages()
  }
}
</script>
