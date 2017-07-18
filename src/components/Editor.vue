<template>
  <div class="editor" id="editorCont">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-md-2">
            <select class="form-control" @change="changeLanguage" v-model="lang">
              <option selected value="C++">C++</option>
              <option value="JAVA">JAVA</option>
              <option value="PY">PYTHON</option>
            </select>
          </div>
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <select class="form-control" @change="changeFont" v-model="fontSize">
              <option selected disabled>select font size</option>
              <option value="10">10px</option>
              <option value="12">12px</option>
              <option value="13">13px</option>
              <option value="14">14px</option>
              <option value="16">16px</option>
              <option value="18">18px</option>
              <option value="20">20px</option>
            </select>
          </div>
        </div>
        
      </div>
      <div class="card-block">
        <div id="editor"></div>
      </div>
      <div class="card-footer">
        <div v-if="loading">Compiling please wait...</div>
        <div v-if="codeOutput">
          <div v-if=" codeOutput['compile_status'] === 'OK' ">
            <div class="alert alert-success">
              <strong>Output: </strong> 
              <p v-html="codeOutput['run_status']['output_html']"></p>
            </div>
          </div>
          <div v-else>
            <div class="alert alert-danger">
            <strong>Failure!</strong> {{codeOutput['compile_status']}}
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-lg-1 col-md-2 col-sm-4 col-6">
            <button class="btn btn-primary test-btn" @click="handleRunClick">Test</button>
          </div>
          <div class="col-lg-1 col-md-2 col-sm-4 col-6" style="visibility: hidden;">
            <button class="btn btn-primary submit-btn">Submit</button>
          </div>
          <div class="col-lg-10 col-md-8 col-sm-4 col-0"></div>
        </div>
        <hr>
        <div>
          <div class="form-group">
            <label for="exampleTextarea">Custom test case</label>
            <textarea class="form-control" id="exampleTextarea" rows="3" v-model.lazy="inputData"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templates from '../assets/data/templates'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      templates: templates,
      inputData: '',
      loading: false,
      lang: 'C++',
      fontSize: 10
    }
  },
  methods: {
    ...mapActions({
      run: 'RUN_CODE'
    }),
    handleRunClick: function(){
      this.loading = true
      var data ={
        code: this.editor.getValue(),
        lang: this.lang,
        input: this.inputData
      }
      this.run(data)
          .then( () => {
            this.loading = false;
            console.log('resp', this.codeOutput);
          })
          .catch(() => {
            this.loading = false;
          })
    },
    changeLanguage: function(){
      switch(this.lang) {
          case 'C++':
              this.editor.getSession().setMode('ace/mode/c_cpp')
              this.editor.setValue(this.templates.cpp,1)
              this.$cookie.set('e_mode','c_cpp',100)
              break;
          case 'JAVA':
              this.editor.getSession().setMode('ace/mode/java')
              this.editor.setValue(this.templates.java,1)
              this.$cookie.set('e_mode','java',100)
              break;
          case 'PY':
              this.editor.getSession().setMode('ace/mode/python')
              this.editor.setValue(this.templates.python,1)
              this.$cookie.set('e_mode','python',100)
              break;
          default:
              break;
      }
      
    },
    changeFont: function(){
      var _this = this;
      this.editor.setOptions({
        fontSize: _this.fontSize+"pt"
      });
      this.$cookie.set('e_font',this.fontSize+'pt',100);
    },
    initEditor: function(mode,font,template){
      var ace = require('brace');
      require('brace/theme/monokai');
      require("brace/ext/language_tools");
      require('brace/mode/c_cpp');
      require("brace/snippets/c_cpp");
      require('brace/mode/java');
      require("brace/snippets/java");
      require('brace/mode/python');
      require("brace/snippets/python");
      require("brace/snippets/text");
      this.editor = ace.edit('editor');
      this.editor.setTheme('ace/theme/monokai');
      this.editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
      });
      this.editor.$blockScrolling = Infinity 
      this.editor.setShowPrintMargin(false)
      this.editor.getSession().setMode('ace/mode/'+mode)
      this.editor.setValue(template,1)
      this.editor.setOptions({
        fontSize: font
      });
    }
  },
  computed: {
    ...mapGetters([
      'codeOutput','getSolution'
    ])
  },
  mounted (){
    var flag = true
    if(this.$route.query.q){
      const path = '/'+atob(this.$route.query.q)+'.cpp';
      debugger;
      this.getSolution(path).then( (data) => {
            this.initEditor('c_cpp','12pt',data);
            flag = false
          })
          .catch(() => {
            
          })
    }
    if(flag){
      var mode = this.$cookie.get('e_mode') ? this.$cookie.get('e_mode') : 'c_cpp'
      var font = this.$cookie.get('e_font') ? this.$cookie.get('e_font') : '12pt'
      var template = this.$cookie.get('e_mode') ? this.templates[this.$cookie.get('e_mode')] : this.templates['c_cpp']
      this.fontSize = parseInt(font);
      if(mode == 'c_cpp'){
        this.lang='C++';
      }else if(mode == 'java' ){
        this.lang='JAVA';
      }else{
        this.lang = 'PY';
      }
      this.initEditor(mode,font,template);
    }
    document.getElementById('editorCont').scrollIntoView();
  }
}
</script>

<style scoped>
  #editor{ 
    width: 100%;
    height: 400px;
  }
  .full-screen{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .compile-btn,.test-btn,.submit-btn{
    width: 100px;
  }
  button.btn{
    cursor: pointer;
  }
  hr{
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  .card-block{
    padding: 10px;
  }
</style>
