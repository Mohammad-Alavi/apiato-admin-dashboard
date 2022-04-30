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
      <v-card-text>
        <ikon-gallery-grid-wrapper v-model="images" :useDragHandle="true" axis="xy" @input="reorderGalleryImage"
                            @sort-end="getDraggedImageIndex">
          <ikon-gallery-grid-item v-for="(image, index) in images" :key="index" :index="index">
            <v-img :lazy-src="`${this.imgDomainUrl}/${this.imagePresets.preload}/${image.file}`" :src="`${this.imgDomainUrl}/${this.imagePresets.large2048}/${image.file}`" aspect-ratio="1" max-width="300" max-height="300"
                   class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular color="grey lighten-5" indeterminate/>
                </v-row>
              </template>
              <v-btn :loading="manipulatingImage" icon right absolute @click="removeGalleryImage(image.id, index)">
                <v-icon>mdi-close</v-icon>
              </v-btn>

              <v-btn :loading="manipulatingImage" left icon absolute v-handle>
                <v-icon>mdi-cursor-move</v-icon>
              </v-btn>
            </v-img>
          </ikon-gallery-grid-item>
        </ikon-gallery-grid-wrapper>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn :loading="manipulatingImage" color="primary" @click="addFile">
          ADD
        </v-btn>
      </v-card-actions>

      <input ref="fileUploader" type="file" class="d-none" multiple accept="image/*" @change="imageAdded">
    </v-card>
  </v-container>
</template>

<script>
import { HandleDirective } from 'vue-slicksort'
import { IMAGE_PRESETS } from '@/modules/app/constants/image-presets'

export default {
  name: 'IkonProviderGalleryPage',
  data () {
    return {
      manipulatingImage: false,
      galleryFiles: null,
      images: [],
      image: null,
      galleryActiveIndex: null,
      imgDomainUrl: process.env.VUE_APP_IMG_URL,
      imagePresets: IMAGE_PRESETS
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
    IkonUserOptions: () => import('@/modules/app/components/IkonUserOptions')
  },
  methods: {
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
