<template>
	<div id='vote'>
		<ul>
			<li v-for='(user,key) in classmates' :key='user.id'>{{user.name}}-支持率：{{user.approval_rate}}<span @click='useradd(key)'>支持</span></li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL="http://localhost";
export default {
  data () {
    return {
    	id: 0,
    	classmates: []
    }
  },
  methods: {
  	useradd: function (index) {
  		this.id=index
  		axios.post('/add', { id: this.id }).then(res=>{
			this.classmates=res.data
		},res=>{})
  	}
  },
  mounted() {
	axios.get('/user',{
		emulateJSON:true
	}).then(res=>{
		this.classmates=res.data
	},res=>{})
  }
}
</script>
