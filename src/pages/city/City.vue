<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCs="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

export default {
  name: "City",
  data: function() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo: function() {
      axios.get("/api/city.json").then(this.getCityInfoSuccess);
    },
    getCityInfoSuccess: function(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange: function(letter) {
      // console.log(letter);
      this.letter = letter;
    }
  },
  mounted: function() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>
