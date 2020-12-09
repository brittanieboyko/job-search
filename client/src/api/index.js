import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})
// ==== Job Routes ==== //
export const insertJob = payload => api.post(`/job`, payload)
export const getAllJobs = () => api.get(`/jobs`)
export const updateJobById = (id, payload) => api.put(`/job/${id}`, payload)
export const deleteJobById = id => api.delete(`/job/${id}`)
export const getJobById = id => api.get(`/job/${id}`)

// ==== ToDo Routes ==== //

export const insertToDo = payload => api.post(`/todo`, payload)
export const getAllToDos = () => api.get(`/todos`)
export const updateToDoById = (id, payload) => api.put(`/todo/${id}`, payload)
export const deleteToDoById = id => api.delete(`/todo/${id}`)
export const getToDoById = id => api.get(`/todo/${id}`)

const apis = {
    insertJob,
    getAllJobs,
    updateJobById,
    deleteJobById,
    getJobById,
    insertToDo,
    getAllToDos,
    updateToDoById,
    deleteToDoById,
    getToDoById
}

export default apis