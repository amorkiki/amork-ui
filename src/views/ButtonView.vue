<template>
  <div class="row">
    <amor-button>clean</amor-button>
    <amor-button type="warning">warning</amor-button>
    <amor-button type="primary" round>round</amor-button>
    <amor-button type="info" circle>circle</amor-button>
    <amor-button type="danger" loading>loading</amor-button>
    <amor-button disabled plain>disabled</amor-button>
  </div>
  
</template>

<style lang="scss" scoped>
.row {
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 20px auto;
  margin-bottom: 30px;
}
</style>
