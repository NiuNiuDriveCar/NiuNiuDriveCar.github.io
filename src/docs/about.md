---
layout: page
---

<script setup>
import {
	VPTeamPage,
	VPTeamPageTitle,
	VPTeamMembers,
	VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
	{
		avatar: '/about/niuniu.jpg',
		name: 'niuniu',
	},
	{
		avatar: '/about/naigai.jpg',
		name: 'naigai',
	}
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title></template>
    <!-- <template #lead>...</template> -->
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>