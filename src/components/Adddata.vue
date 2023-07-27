<template>
  <div class="alert alert-success" v-if="this.error.length > 0" role="alert">
    <p class="text-center fw-bold">{{ this.error }}</p>
  </div>

  <div class="container shadow-lg p-3 mb-5 bg-body rounded mt-4 w-50">
    <div class="row">
      <div class="col-md-6 offset-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bolder"
            >SERIAL NUMBER</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Serial Number"
            name="sl_no"
            v-model="post.sl_no"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bolder"
            >STATE</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter State Name"
            name="state"
            v-model="post.state"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bolder"
            >CAPITAL</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Capital Name"
            name="capital"
            v-model="post.capital"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bolder"
            >CHIEF MINISTER</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter CM Name"
            name="chief_minister"
            v-model="post.chief_minister"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bolder"
            >GOVERNOR</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Governor Name"
            name="governer"
            v-model="post.governer"
          />
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <button
        type="submit"
        @click="add_newdata"
        class="btn btn-primary btn1 w-25 text-center"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddData",
  data() {
    return {
      post: {
        sl_no:"",
        state: "",
        capital: "",
        chief_minister: "",
        governer: "",
      },
      error: "",
    };
  },
  methods: {
    add_newdata() {
      axios
        .post(" http://localhost:8000/api/list/newdata", this.post)
        .then((res) => {
          //console.log(res);
          this.error = res.data.message;
          console.log(this.error);
          setTimeout(() => {
            this.$router.push({ name: "TableData" });
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.btn1 {
  margin-left: 37%;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: large;
}
</style>
