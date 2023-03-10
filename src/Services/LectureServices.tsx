import axios from "axios";

import {
  IAddBookMarkObject,
  ICreateLectureValues,
  ILectureResponse,
  ISearchValues

} from "./LectureInterface";

//interface for creating lectures and editing lectures

export interface ILecturePostResponse {
  message: string;
}
// Lecture Post service
export async function LecturePostService(
  data: ICreateLectureValues
): Promise<ILecturePostResponse> {
  const {
    title,
    batch,
    section,
    type,
    createdBy,
    category,
    schedule,
    concludes,
    tags,
    day,
    hideVideo,
    optional,
    zoomLink,
    notes,
    week,
  } = data;
  try {
    const response = await axios.post("/api/lecture/addLecture", {
      title,
      batch,
      section,
      type,
      createdBy,
      category,
      schedule,
      concludes,
      tags,
      day,
      hideVideo,
      optional,
      zoomLink,
      notes,
      week,
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// lectures edit service functio
export async function LectureEditService(
  data: ICreateLectureValues,
  id: string | undefined
): Promise<ILecturePostResponse> {
 
  const {
    title,
    batch,
    section,
    type,
    createdBy,
    category,
    schedule,
    concludes,
    tags,
    day,
    optional,
    hideVideo,
    zoomLink,
    notes,
    week,
  } = data;

  try {
    const response = await axios.put(`/api/lecture/UpdateLecture/${id}`, {
      title,
      batch,
      section,
      type,
      createdBy,
      category,
      schedule,
      concludes,
      tags,
      day,
      optional,
      hideVideo,
      zoomLink,
      notes,
      week,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// lectures searching service
export async function LectureSearchService(
  data: ISearchValues
){
  const { title, batch, section, type, createdBy, startTime, day, week } = data;
  console.log("data",data)
  try {
    const response = await axios.post(
      "/api/lecture/lectures/search",
      { title, batch, section, type, startTime, createdBy, day, week }
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}
// for getting all lectures when user enters to the lectures page
export async function GetAllLectureService() {
  try {
     const response = await axios.get("/api/lecture/lectureList");
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// getting single lecture details service
export async function LectureSingleService(id: any) {
  try {
    const response = await axios.get(
      `/api/lecture/lectures/${id}`
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// deleting for Lecture Service
export async function LectureDeleteService(
  lectureId: any
): Promise<ILecturePostResponse> {
  try {
    const response = await axios.post(`/api/lecture/removeLecture/${lectureId}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// lectures copy service function
export async function LectureCopyService(
  data:any,
  lectureId: string | undefined
): Promise<ILecturePostResponse> {
  const {
    title,
    batch,
    schedule,
    concludes,
    tags,
    day,  
    zoomLink,
    optional,
    notes,
    week,
  } = data;
  try {
    let updatedBy
    updatedBy = Number(localStorage.getItem("userId"))
    if(!updatedBy){
      updatedBy = Number(sessionStorage.getItem("userId"))
    }
    const response = await axios.post(`/api/lecture/lectures/${lectureId}/copy`, {
      title,
      batch,
      schedule,
      concludes,
      tags,
     day,
     optional,
     updatedBy:updatedBy,
      zoomLink,
      notes,
      week,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// for getting all bookmarks
export async function GetAllBookMarksService(
  id: any
) {
  try {
    const response = await axios.get(`/api/getList/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//add bookmark service
export async function AddBookMarksService({
  id,
}: any): Promise<IAddBookMarkObject[]> {
  try {
    const response = await axios.post("/api/bookmark", {
      userId: "105",
      lectureid: "205",
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//Remove BookMarks service
export async function RemoveBookMarksService({
  id,
}: any) {
  try {
    const response = await axios.delete(`/api/bookmark/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//get all dashboard  services
export async function GetDashboardLecturesService(): Promise<
  ILectureResponse[]
> {
  // const   {batchId,sectionId} =data
 // console.log(batchId,sectionId)
  try {
    const response = await axios.get(`/api/dashboard/lectures/${2}/${2}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// add video file service
export async function AddVideoFileService(file: any, lectureId: any) {
  
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`/api/lecture/${lectureId}/video`,
    file
    );

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// for getting all lectures when user enters to the lectures page
export async function GettAllStudentLectureService(): Promise<
  // ILectureResponse[]
  any
> {
  try {
    let batchId = localStorage.getItem("batchId") || sessionStorage.getItem("batchId");
    let sectionId = localStorage.getItem("sectionId") || sessionStorage.getItem("sectionId");
    const response = await axios.get(
      `/api/lecture/lectureList/student/${sectionId}/${batchId}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
}

export async function LectureStudentSearchService(
  data :any
): Promise<ILectureResponse[]> {
  const { title, batch, section, type, createdBy, startTime, day, week, category } = data;
  try {
    let batchId = localStorage.getItem("batchId") || sessionStorage.getItem("batchId");
    let sectionId = localStorage.getItem("sectionId") || sessionStorage.getItem("sectionId");
    console.log("data",data)
    const response = await axios.post(
      `/api/lecture/lectures/search/student/${sectionId}/${batchId}`,
      { title, batch, section, type, startTime, createdBy, day, week, category }
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}
