import Tag from './Tag.vue';

export default {
  title: 'Form/Navigation/Tag',
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['solid', 'hollow', 'special', 'image'],
      },
    },
    value: {
      control: 'text',
    },
    tagColor: {
      control: 'color',
    },
    fontColor: {
      control: 'color',
    },
    specialIcon: {
      control: 'text',
    },
    img: {
      control: 'text',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
    <Tag
      :type="type"
      :value="value"
      :tagColor="tagColor"
      :fontColor="fontColor"
      :specialIcon="specialIcon"
      :img="img"
    />
  `,
});

export const SolidTag = Template.bind({});
SolidTag.args = {
  type: 'solid',
  value: 'Sample Solid Tag',
  tagColor: '#ff5000',
  fontColor: '#333333',
};

export const HollowTag = Template.bind({});
HollowTag.args = {
  type: 'hollow',
  value: 'Sample Hollow Tag',
  tagColor: '#ff5000',
  fontColor: '#333333',
};

export const SpecialTag = Template.bind({});
SpecialTag.args = {
  type: 'special',
  value: 'Sample Special Tag',
  tagColor: '#ff5000',
  fontColor: '#333333',
  specialIcon: 'path_to_special_icon',
};

export const ImageTag = Template.bind({});
ImageTag.args = {
  type: 'image',
  img: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/tag.png',
};
