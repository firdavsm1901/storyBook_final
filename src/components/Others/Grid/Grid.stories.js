
import Grid from './Grid.vue';
import GridItem from './GridItem.vue';

export default {
  title: 'Form/Others/Grid',
};

export const CombinedGrid = () => ({
  components: { Grid, GridItem },
  template: `
    <Grid :col="3" :square="false" :padding="'24px'" :center="true" :border="true" :hover="true">
      <GridItem :col="3" :square="false">
        <!-- Content for GridItem 1 -->
        
      </GridItem>
      <GridItem :col="3" :square="false">
        <!-- Content for GridItem 2 -->
      </GridItem>
      <!-- You can add more GridItem components here -->
    </Grid>
  `,
});
