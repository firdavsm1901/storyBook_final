<script>
import { h } from 'vue';

export default {
  name: 'TableHeader',
  render() {
    const defaultSlot = this.$slots.default();
    const isNestedSlot =
      defaultSlot[0].type === 'template' ||
      defaultSlot[0].type.toString() === 'Symbol(Fragment)' ||
      defaultSlot[0].type.toString() === 'Symbol()';

    let columns;
    if (isNestedSlot) {
      columns = defaultSlot
        .flatMap((slotItem) => slotItem.children)
        .map((child) => h('td', { style: 'border: 1px solid #000;' }, child)); 
    } else {
      columns = defaultSlot.map((slotItem) => h('td', { style: 'border: 1px solid #000;' }, slotItem)); // Adding border style here
    }
    const tr = h('tr', columns);
    return h('thead', this.$attrs, tr);
  }
};
</script>
