<template>
  <div class="container-fluid">
    <router-link to="/add">
      <button type="submit" class="btn btn-outline-success mt-2 btn2">
        ADD DATA
      </button>
    </router-link>
  </div>
  <div class="container-fluid mt-2 shadow-lg p-3 mb-5 bg-body rounded">
    <table class="table table-dark table-striped table-hover">
      <thead class="table-danger">
        <tr class="text-center">
          <th scope="col">SL NO</th>
          <th scope="col">STATE</th>
          <th scope="col">CAPITAL</th>
          <th scope="col">CHIEF MINISTER</th>
          <th scope="col">GOVERNOR</th>
          <th scope="col">ACTIONS</th>
        </tr>
      </thead>
      <tbody v-if="this.cmgc.length > 0" class="text-center">
        <tr class="text-center" v-for="(item, index) in this.cmgc" :key="index">
          <th scope="row">{{ item.sl_no }}</th>
          <td>{{ item.state }}</td>
          <td>{{ item.capital }}</td>
          <td>{{ item.chief_minister }}</td>
          <td>{{ item.governer }}</td>
          <td class="mx-auto">
            <button type="submit" class="btn btn-primary mx-1">
              <router-link class="nav-link" to="/single">
                <i class="fa-solid fa-eye"> </i>
              </router-link>
            </button>
            <button type="submit" class="btn btn-warning mx-1">
              <router-link class="nav-link" to="/edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </router-link>
            </button>
            <button type="submit" class="btn btn-danger mx-1">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6">
            <div
              class="d-flex align-items-center justify-content-between container"
            >
              <strong class="load">Loading....</strong>
              <div
                class="spinner-border text-warning ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TableData",
  data() {
    return {
      cmgc: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getalldata();
    }, 3000);
  },
  methods: {
    getalldata() {
      const baseurl = "http://localhost:8000/api/list/all";
      axios
        .get(baseurl)
        .then((res) => {
          this.cmgc = res.data;
          //console.log(this.cmgc)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.load {
  color: darkorange;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
}
.btn2 {
  margin-left: 90%;
}
</style>
