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
		name: '牛牛',
	},
	{
		avatar: '/about/naigai.jpg',
		name: '奶盖',
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
