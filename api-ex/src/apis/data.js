// angular/angular-cli 레포의 issue data 가져오기

import { axiosInstace } from "./@core";

const dataApi = {
  // default 값 설정
  getRepoData(page = 1, perPage = 10, sort = "created") {
    console.log("❤️ axiosInstance 성공 ❤️");
    return axiosInstace.get(
      // `/repos/angular/angular-cli/issues`, {params} // 매개변수 params 전달 (리팩토링해보기)
      `/repos/angular/angular-cli/issues?page=${page}&per_page=${perPage}&sort=${sort}`
    );
  },
};

export default dataApi;
