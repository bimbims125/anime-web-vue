<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb__links">
            <a href="./index.html"><i class="fa fa-home"></i> Home</a>
            <a href="./categories.html">Categories</a>
            <span>Romance</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Anime Section Begin -->
  <section class="anime-details spad">
    <div class="container">
      <div class="anime__details__content">
        <div class="row">
          <div class="col-lg-3">
            <div class="anime__details__pic set-bg" :data-setbg="anime.thumb">
              <div class="comment"><i class="fa fa-comments"></i> 11</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="anime__details__text">
              <div class="anime__details__title">
                <h3>{{ detail[0] }}</h3>
                <span>{{ detail[1]}}</span>
              </div>
              <div class="anime__details__rating">
                <div class="rating">
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star-half-o"></i></a>
                </div>
                <span>1.029 Votes</span>
              </div>
              <p v-for="sinopsis in anime.dataSinopsis">{{ sinopsis }}</p>

              <div class="anime__details__widget">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Type:</span>{{ detail[4] }}</li>
                      <li><span>Studios:</span> {{detail[9]}}</li>
                      <li><span>Date aired:</span>{{detail[8]}}</li>
                      <li><span>Status:</span> {{detail[5]}}</li>
                      <li><span>Genre:</span> {{detail[10]}}</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Scores:</span> {{ detail[2] }}</li>
                      <li><span>Rating:</span> {{ detail[2] }}</li>
                      <li><span>Duration:</span>{{ detail[7] }}</li>
                      <li><span>Quality:</span> HD</li>
                      <li><span>Views:</span> 131,541</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="anime__details__btn mb-4">
                <a href="#" class="follow-btn"><i class="fa fa-heart-o"></i> Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">

        <div class="col-lg-8 col-md-8">
                    <div class="anime__details__episodes">
                        <div class="section-title">
                            <h5>Daftar Episode</h5>
                        </div>
                        <ul style="list-style: none" v-for="(eps) in anime.episode_list">
                            <li class="anime__details__btn"><a href="" class="follow-btn"><i class="fa fa-film"></i>{{ eps.episode_title }}</a></li>
                        </ul>
                    </div>
                </div>
        <div class="col-lg-4 col-md-4">
          <div class="anime__details__sidebar">
            <div class="section-title">
              <h5>you might like...</h5>
            </div>
            <div class="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">Boruto: Naruto next generations</a></h5>
            </div>
            <div class="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
            </div>
            <div class="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">Sword art online alicization war of underworld</a></h5>
            </div>
            <div class="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Anime Section End -->
</template>
<script>
  import axios from 'axios'
  import {
    ref,
    onMounted,
    reactive,
  } from 'vue'

  import {
    useRoute
  } from 'vue-router'

  export default {

    setup() {
      const route = useRoute()
      const anime = ref({
        dataDetail: [],
        dataSinopsis: [],
      })
      const detail = ref([])
      onMounted(() => {
        axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${route.params.slug}`)
          .then((result) => {
            anime.value = result.data
            anime.value.dataDetail = result.data.anime_detail.detail
            anime.value.dataSinopsis = result.data.anime_detail.sinopsis
            for(let i = 0; i < anime.value.dataDetail.length; i++){
              detail.value.push(anime.value.dataDetail[i].split(':')[1])
            }
            console.log(anime.value.episode_list);
          }).catch((err) => {
            console.log(err);
          });
        })
      return {
        anime, detail
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>
