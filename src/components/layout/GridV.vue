<template>
  <div class="container">
    <div class="row rowtip"></div>
      <div class="card card-default"> 
        <div id="collapse4" class="card-collapse collapse in">
          <div class="row">
            <div class="col-sm-3" v-for="item in thumbnails" :key="item.id">
              <div class="card border-primary mb-3">
                <div class="card-body">
                  <table class="table table-bordered">            
                    <tbody>
                        <tr>            
                          <td>
                              <div class="thumb-position">
                                  <div v-if="item.thumbnail_url === null" class="initImg containImg"><img src="http://placehold.jp/270x150.png?text=placeholder"/></div>
                                  <img v-bind:src="item.thumbnail_url" v-if="item.thumbnail_url !== null" class="initImg containImg" />
                                  <div v-if="item.format === 'TEXT'" class="asset asset-border icon-direction"><i class="fas fa-pencil-alt"></i></div>
                                  <div v-if="item.format === 'URL'" class="asset asset-border icon-direction"><i class="fas fa-link"></i></div>
                                  <div v-if="item.format === 'IMAGE'" class="asset asset-border img-direction">{{item.selected_assets}}<span>/</span>{{item.total_assets}}<span class="info-space"> Selected </span><i class="fas fa-camera"></i></div>
                                  <div v-if="item.format === 'VIDEO'" class="asset asset-border img-direction">{{item.selected_assets}}<span>/</span>{{item.total_assets}}<span class="info-space"> Selected </span><i class="fas fa-video"></i></div>
                              </div>
                              <div class="message">{{ item.message }}</div>
                              <div class="social-direction"> 
                                <div class="social-position" v-for="plat in item.platforms" :key="plat.id">
                                    <img v-if="plat.name === 'Facebook'" src="@/assets/platforms/facebook.svg" />
                                    <img v-if="plat.name === 'Instagram'" src="@/assets/platforms/instagram.svg" />  
                                    <svg v-if="plat.has_content == true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" class="imtip"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM6.35355 9.35355L10.3536 5.35355L9.64645 4.64645L6 8.29289L4.35355 6.64645L3.64645 7.35355L5.64645 9.35355L6 9.70711L6.35355 9.35355Z" fill="#5CB85B"/> <path d="M10.3536 5.35355L10.7071 5.70711L11.0607 5.35355L10.7071 5L10.3536 5.35355ZM6.35355 9.35355L6.70711 9.70711L6.35355 9.35355ZM9.64645 4.64645L10 4.29289L9.64645 3.93934L9.29289 4.29289L9.64645 4.64645ZM6 8.29289L5.64645 8.64645L6 9L6.35355 8.64645L6 8.29289ZM4.35355 6.64645L4.70711 6.29289L4.35355 5.93934L4 6.29289L4.35355 6.64645ZM3.64645 7.35355L3.29289 7L2.93934 7.35355L3.29289 7.70711L3.64645 7.35355ZM5.64645 9.35355L5.29289 9.70711L5.64645 9.35355ZM6 9.70711L5.64645 10.0607L6 10.4142L6.35355 10.0607L6 9.70711ZM12.5 7C12.5 10.0376 10.0376 12.5 7 12.5V13.5C10.5899 13.5 13.5 10.5899 13.5 7H12.5ZM7 1.5C10.0376 1.5 12.5 3.96243 12.5 7H13.5C13.5 3.41015 10.5899 0.5 7 0.5V1.5ZM1.5 7C1.5 3.96243 3.96243 1.5 7 1.5V0.5C3.41015 0.5 0.5 3.41015 0.5 7H1.5ZM7 12.5C3.96243 12.5 1.5 10.0376 1.5 7H0.5C0.5 10.5899 3.41015 13.5 7 13.5V12.5ZM10 5L6 9L6.70711 9.70711L10.7071 5.70711L10 5ZM9.29289 5L10 5.70711L10.7071 5L10 4.29289L9.29289 5ZM6.35355 8.64645L10 5L9.29289 4.29289L5.64645 7.93934L6.35355 8.64645ZM4 7L5.64645 8.64645L6.35355 7.93934L4.70711 6.29289L4 7ZM4 7.70711L4.70711 7L4 6.29289L3.29289 7L4 7.70711ZM6 9L4 7L3.29289 7.70711L5.29289 9.70711L6 9ZM6.35355 9.35355L6 9L5.29289 9.70711L5.64645 10.0607L6.35355 9.35355ZM6 9L5.64645 9.35355L6.35355 10.0607L6.70711 9.70711L6 9Z" fill="#FFFFFF"/></svg> 
                                    <svg v-else xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" class="imtip"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM4 7.5H10V6.5H4V7.5Z" fill="#EB5757"/> <path d="M10 7.5V8H10.5V7.5H10ZM4 7.5H3.5V8H4V7.5ZM10 6.5H10.5V6H10V6.5ZM4 6.5V6H3.5V6.5H4ZM12.5 7C12.5 10.0376 10.0376 12.5 7 12.5V13.5C10.5899 13.5 13.5 10.5899 13.5 7H12.5ZM7 1.5C10.0376 1.5 12.5 3.96243 12.5 7H13.5C13.5 3.41015 10.5899 0.5 7 0.5V1.5ZM1.5 7C1.5 3.96243 3.96243 1.5 7 1.5V0.5C3.41015 0.5 0.5 3.41015 0.5 7H1.5ZM7 12.5C3.96243 12.5 1.5 10.0376 1.5 7H0.5C0.5 10.5899 3.41015 13.5 7 13.5V12.5ZM10 7H4V8H10V7ZM9.5 6.5V7.5H10.5V6.5H9.5ZM4 7H10V6H4V7ZM4.5 7.5V6.5H3.5V7.5H4.5Z" fill="#FFFFFF"/></svg>
                                </div>                     
                              </div>                                      
                          </td>             
                        </tr>
                     </tbody>
                   </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
   </div>
</template>

<script>
import thumbnailData from  '@/assets/json/queston1.json';

export default {
  name: 'GridV',
  data(){
              return{
                  thumbnails: thumbnailData
              }
          }
  
}
</script>

<style>
 .initImg{
    width: 270px;
    height: 150px;
 }

 .containImg{
    object-fit: cover;
 }

 .asset {
    background-color: white;
    border: none;
    color: #5c6169;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
}

.asset-border {
  border-radius: 12px;
}

.img-direction{
    position: absolute;
    bottom: 0;
    left: 140px;
    top: 40px;
    height: 30px;
}

.icon-direction{
  position: absolute;
  bottom: 0;
  left: 232px;
  top: 110px;
  height: 25px;
}

.info-space{
  word-spacing:5px;
 
}

.social-direction{
  padding-top: 30px;
  text-align:right !important;
}

.thumb-position{
  position: relative;
  display: inline;
}

.social-position{
  position: relative;
  display: inline;
}

.imtip {
  position: absolute;
  bottom: 0;
  right: 0;
  top:16px;
  left: 18px;
}

.message{
  padding-top: 2px;
}

.rowtip{
  padding-top: 20px;;
}

</style>