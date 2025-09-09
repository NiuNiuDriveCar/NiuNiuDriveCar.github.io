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
		avatar: '/about/zoroada.jpg',
		name: 'zoroada',
	},{
		avatar: '/about/0098.webp',
		name: '0098',
	},
	{
		avatar: '/about/earth.webp',
		name: '🌎',
	},
]
</script>

<VPTeamPage>
  <!-- <VPTeamPageTitle>
    <template #title>special thanks to</template>
  </VPTeamPageTitle> -->
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
