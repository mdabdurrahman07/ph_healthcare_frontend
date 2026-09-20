import apiClient from "@/lib/apiClient";
import { ApiResponse } from "@/types/api/api.types";
import type { VerifyAccountPayload } from "@/types/auth/auth.type";
import type {
  ApproveDoctorPayload,
  Doctor,
  DoctorApplicationPayload,
  DoctorParams,
} from "@/types/doctor/doctor.type";

export function applyAsDoctor(payload: DoctorApplicationPayload) {
  const formData = new FormData();
  formData.append("data", JSON.stringify(payload.data));
  formData.append("resume", payload.resume);
  for (const file of payload.additionalFiles) {
    formData.append("additionalFiles", file);
  }
  return apiClient("/doctor/apply_as_doctor", {
    method: "POST",
    body: formData,
  });
}
export function verifyDoctorAccount(payload: VerifyAccountPayload) {
  return apiClient("/doctor/apply_as_doctor/verifyEmail", {
    method: "POST",
    body: payload,
  });
}

export function getAllDoctors(params: DoctorParams) {
  return apiClient<ApiResponse<Doctor[]>>("/doctor/all-doctors", {
    params,
  });
}

export function approveDoctor(payload: ApproveDoctorPayload) {
  return apiClient("/doctor/approve-doctor", {
    method: "POST",
    body: payload,
  });
}
