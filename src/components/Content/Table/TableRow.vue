<script>
import { h } from 'vue';

export default {
  name: 'TableRow',
  props: {
    singleCellRow: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const defaultSlot = this.$slots.default();
    const isNestedSlot =
      defaultSlot[0].type === 'template' ||
      defaultSlot[0].type.toString() === 'Symbol(Fragment)' ||
      defaultSlot[0].type.toString() === 'Symbol()';

    let items;
    if (isNestedSlot) {
      items = defaultSlot.flatMap((slotItem) => slotItem.children);
    } else {
      items = defaultSlot;
    }

    let cells;
    if (this.singleCellRow) {
      cells = h('td', { colspan: '100%', style: 'border: 1px solid #000;' }, items); 
    } else {
      cells = items.map((item) => h('td', { style: 'border: 1px solid #000;' }, item)); 
    }

    return h('tr', this.$attrs, cells);
  }
};
</script>
