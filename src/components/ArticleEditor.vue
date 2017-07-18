<template>
	<div class="container-fluid">
		<div>
			<div class="row" style="margin-bottom: 10px">
				<div class="col-md-3">
				<button class="btn btn-primary" :class="[tag == 'p' ? 'btn-success' : '']" @click="tag = 'p'">add paragraph</button>
				</div>
				<div class="col-md-3">
				<button class="btn btn-primary" :class="[tag == 'h1' ? 'btn-success' : '']" @click="tag = 'h1'">add header</button>
				</div>
				<div class="col-md-3">
				<button class="btn btn-primary" :class="[tag == 'h3' ? 'btn-success' : '']" @click="tag = 'h3'">add subheader</button>
				</div>
        <div class="col-md-3">
          <button class="btn btn-primary" :class="[tag == 'script' ? 'btn-success' : '']" @click="tag = 'script'">add html</button>
        </div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<input type="text" class="form-control" v-model="link">
				</div>
				<div class="col-md-4">
					<button class="btn btn-primary" @click="creatLink">emded link</button>
				</div>
			</div>
		</div>
		<div style="margin-top: 20px;">
			<textarea class="form-control" id="editArea" v-model="text"></textarea>
			<button class="btn btn-primary" @click="createHtml" style="margin-top: 20px">add</button>
		</div>
		
		<div class="preview" id="preview">
			
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'article-editor',
  data (){
  	return {
  		tag:null,
  		text:"",
  		link:""
  	}
  },
  methods: {
  	createHtml: function(){
  		if(this.text.length <= 0)return;
  		var node = document.createElement(this.tag);
      node.appendChild(document.createTextNode(this.text));
  		document.getElementById("preview").appendChild(node);
  	},
  	creatLink: function(){
  		if(this.link.length <= 0)return;
      var config = {
          headers: {'Access-Control-Allow-Origin': '*'}
      };
  		axios.get(this.link, config)
  					.then( (response) => {
                console.log(response)
              }, (err) => {
                
              })
  	}
  },
  computed: {
  	startTag: function(){
  		return '<'+this.tag+'>';
  	},
  	endTag: function(){
  		return '</'+this.tag+'>';
  	}
  },
  created: function(){
  	
  }
}
</script>