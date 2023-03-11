import axios from "axios";

import {
  IAddBookMarkObject,
  ICreateLectureValues,
  ILectureResponse,
  ISearchValues,
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
  data: ICreateLectureValues,
  lectureId: string | undefined
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
    optional,
    day,
    hideVideo,
    zoomLink,
    notes,
    week,
  } = data;
  try {
    const response = await axios.post(`/api/lectures/${lectureId}/copy`, {
      title,
      batch,
      section,
      type,
      createdBy,
      category,
      schedule,
      concludes,
      tags,
      optional,day,
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
    const response = await axios.post(`/api/lecture/${lectureId}/video`, {file});

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// for getting all lectures when user enters to the lectures page
export async function GettAllStudentLectureService(): Promise<
  ILectureResponse[]
> {
  try {
    const response = await axios.get(
      "/api/lecture/lectureList"
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
}
