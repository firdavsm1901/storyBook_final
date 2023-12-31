<template>
    <div
      :class="`w-full rounded-lg shadow-XLarge py-4 px-6 ${variantDetails.color} ${variantDetails.bgColor}`"
      data-testid="alert"
    >
      <div
        v-if="hasHeading"
        class="flex justify-between items-center"
      >
        <div class="flex items-center">
          <component
            :is="variantDetails.icon"
            v-if="showIcon"
            size="xl"
            class="mr-2"
            :class="variantDetails.color"
            data-testid="alertIcon"
          />
          <div class="type-large-700">
            <slot name="heading" />
          </div>
        </div>
        <CloseButton
          v-if="showCloseButton"
          :close-button-aria-label="closeButtonAriaLabel"
          @close="closeAlert"
        />
        <LinkWithArrow
          v-if="linkSrc && !hasContent"
          :link-src="linkSrc"
          :link-display-text="linkDisplayText"
          :show-close-button="showCloseButton"
          @close="closeAlert"
        />
      </div>
      <div
        v-if="hasContent"
        class="flex items-center justify-between"
      >
        <div class="flex items-center">
          <component
            :is="variantDetails.icon"
            v-if="showIcon && !hasHeading"
            size="xl"
            class="mr-4"
            :class="variantDetails.color"
            data-testid="alertIcon"
          />
          <div :class="['type-small-500', {'mt-2': hasHeading && hasContent}]">
            <slot /> 
          </div>
        </div>
        <CloseButton
          v-if="showCloseButton && !hasHeading"
          :close-button-aria-label="closeButtonAriaLabel"
          @close="closeAlert"
        />
      </div>
      <div class="w-full flex justify-end">
        <LinkWithArrow
          v-if="linkSrc && hasContent"
          :link-src="linkSrc"
          :link-display-text="linkDisplayText"
        />
      </div>
    </div>
  </template>
  
  <script>
  import CircleInfo from '../../Icons/CircleInfo.vue';
  import CircleCheck from '../../Icons/CircleCheck.vue';
  import CircleExclamation from '@/components/Icons/CircleExclamation.vue';
  import TriangleExclamation from '@/components/Icons/TriangleExclamation.vue';
  import ArrowsRotate from '@/components/Icons/ArrowsRotate.vue';
  import XmarkLarge from '@/components/Icons/XmarkLarge.vue';
  import LobLink from '../../Navigation/Link/Link.vue';
  import ArrowUpRight from '../../Icons/ArrowUpRight.vue';
  
  const LinkWithArrow = {
    template: `<LobLink
            :to="linkSrc"
            :underline="false"
            target="_blank"
            role="link"
            class="ml-4 !type-small-500 !text-gray-500 hover:!text-gray-500"
          >
            {{ linkDisplayText }}
            <ArrowUpRight class="inline ml-1 mb-1" />
          </LobLink>`,
    components: { LobLink, ArrowUpRight },
    props: {
      linkSrc: String,
      linkDisplayText: String
    }
  };
  
  const CloseButton = {
    template: `
    <button
      :aria-label="closeButtonAriaLabel"
      data-testid="closeButton"
      @click="closeAlert"
    >
      <XmarkLarge size="s" class="text-gray-500"/>
    </button>`,
    props: {
      closeButtonAriaLabel: { type: String, default: 'Close alert' }
    },
    components: { XmarkLarge },
    methods: {
      closeAlert () {
        this.$emit('close');
      }
    }
  };
  
  export default {
    name: 'Alert',
    components: { CloseButton, LinkWithArrow, CircleInfo, CircleCheck, CircleExclamation, TriangleExclamation, ArrowsRotate },
    props: {
      variant: {
        type: String,
        default: 'info',
        validator: function (value) {
          return ['info', 'success', 'warning', 'refresh', 'error'].includes(value);
        }
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      showCloseButton: {
        type: Boolean,
        default: false
      },
      closeButtonAriaLabel: {
        type: String,
        default: 'Close alert'
      },
      linkSrc: {
        type: String,
        default: null
      },
      linkDisplayText: {
        type: String,
        default: 'Learn more'
      }
    },
    emits: ['close'],
    data () {
      return {
        variants: [
          { variant: 'info', icon: 'CircleInfo', color: 'text-blue-700', bgColor: 'bg-blue-50' },
          { variant: 'success', icon: 'CircleCheck', color: 'text-green-700', bgColor: 'bg-green-50' },
          { variant: 'warning', icon: 'TriangleExclamation', color: 'text-orange-600', bgColor: 'bg-orange-50' },
          { variant: 'refresh', icon: 'ArrowsRotate', color: 'text-purple-600', bgColor: 'bg-purple-50' },
          { variant: 'error', icon: 'CircleExclamation', color: 'text-red-600', bgColor: 'bg-red-50' }
        ] };
    },
    computed: {
      info () {
        return this.variant === 'info';
      },
      success () {
        return this.variant === 'success';
      },
      warning () {
        return this.variant === 'warning';
      },
      refresh () {
        return this.variant === 'refresh';
      },
      error () {
        return this.variant === 'error';
      },
      variantDetails () {
        const selectedVariant = this.variants.find((currentVariant) => currentVariant.variant === this.variant);
        return { icon: selectedVariant.icon, color: selectedVariant.color, bgColor: selectedVariant.bgColor };
      },
      hasHeading () {
        return Boolean(this.$slots.heading);
      },
      hasContent () {
        return Boolean(this.$slots.default);
      }
    },
    methods: {
      closeAlert () {
        this.$emit('close');
      }
    }

    
  };
  </script>


<style scoped>
.rounded-lg {
          border-radius: 0.5rem;
          padding: 1.5rem; 
          margin-bottom: 1.5rem; 
        }
        .shadow-XLarge {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

      
        .type-large-700 {
          font-size: 1.5rem; 
          margin-bottom: 1rem; 
        }

        
        .type-small-500 {
          line-height: 1.5; 
        }

       
        .xl-icon {
          font-size: 2rem; 
        }

        
        .link-arrow {
          text-decoration: none; 
          color: #4a90e2;
        }
        .link-arrow:hover {
          text-decoration: underline; 
        }
    
</style>