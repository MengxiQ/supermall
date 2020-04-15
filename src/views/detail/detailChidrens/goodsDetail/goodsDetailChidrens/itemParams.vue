<template>
    <div class="itemParams">
        <table border="1">
            <tr>
                <th v-for="(item,index) in itemParems.title" :key="index+'th'">{{item}}</th>
            </tr>
            <tr v-for="(item,index) in itemParems.row" :key="index+'1'">
                <td v-for="(item,index) in item.values" :key="index+'2'" :class="{tin_color:index >0}">{{item}}</td>
            </tr>
            <tr v-for="(item,index) in itemParems.others" :key="index+'3'" >
               <td>{{item.key}}</td>
               <td colspan="3" :class="{tin_color:true}">{{item.values}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
  export default {
    name: "itemParams",
    props:{
      itemParems:{
        type:Object
      }
    }
  }
</script>

<style scoped>
    .itemParams{
        background-color: white;
    }
    table{
        border-collapse:collapse;
        text-align: left;
        width: 100%;
    }
    table,th,td{
        border: none;
    }
    tr{
       border-bottom: #c2c2c2 solid 1px;
        line-height: 40px;
    }
    td{
        width: 25%;
    }
    .tin_color{
        color: var(--color-tint);
    }
</style>