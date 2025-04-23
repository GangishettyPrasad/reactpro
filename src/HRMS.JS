// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineDelete } from "react-icons/ai";
// import { SessionLogIn } from "../../sessionLogout";
// import Modal from "react-bootstrap/Modal";
// import { ModalBody } from "react-bootstrap";
// import { FcOk } from "react-icons/fc";
// import { AiOutlineEdit } from "react-icons/ai";
// import DataTable from "react-data-table-component";
// import { useDispatch, useSelector } from 'react-redux';
// import { MdInfo } from "react-icons/md";
// import Tooltip from "react-bootstrap/Tooltip";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import ApiHeaders from "../Common/ApiHeaders";
// import Multiselect from "multiselect-react-dropdown";
// import Select from 'react-select';
// const MyProfileTeam = ({ employeeID, onloadData, callBack, inactiveEmployee }) => {
//   const multitenant = useSelector((state) => state.data);
//   const navigate = useNavigate();
//   const { register, formState: { errors }, getValues, setValue, clearErrors, reset } = useForm();
//   const { register: register1, formState: { errors: errors1 }, handleSubmit: handleSubmit1, getValues: getValues1, setError: setError1, setValue: setValue1, trigger: trigger1, reset: reset1 } = useForm({ mode: "onBlur" });
//   const [addReportingManager, setAddReportingManager] = useState(false);
//   const [EditsReportingManager, setEditsReportingManager] = useState(false);
//   const [errorsTodisplay, seterrorsTodisplay] = useState("");
//   const [addReportingManagerList, setAddReportingManagerList] = useState([]);
//   const [managerTypes, setManagerTypes] = useState([]);
//   const [CompanyEmployess, setCompanyEmployess] = useState([]);
//   const [employeeDiectorsList, setemployeeDiectorsList] = useState([]);
//   const [disable, setDisable] = useState(false);
//   const [errorFromSubDepartment3, seterrorFromSubDepartment3] = useState(false);
//   const [reportingManagerPopUp, setReportingManagerPopUp] = useState(false);
//   const [deleteRowId, setDeleteRowID] = useState(null);
//   const [smShow, setSmShow] = useState(false);
//   const [reportingMAddedPopUp, setReportingMAddedPopUp] = useState(false);
//   const [updateReportingM, setUpdateReportingM] = useState(false);
//   const [backendErrorMsg, setBackendErrorMsg] = useState(false);
//   const [backendErrorMsgText, setBackendErrorMsgText] = useState(false);
//   const [smShowe, setSmShowe] = useState(false);
//   const [deletedID, setDeletedID] = useState(null);
//   const [editApiCondition, setEditApiCondition] = useState(true);
//   var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//   const [editedData, setEditedData] = useState(null);
//   const [removeButtonCondition, setRemoveButtonCondition] = useState(true);
//   const RolesFromDb = JSON.parse(sessionStorage.getItem('RolesFromDb'));
//   const [BasicInfoWorkShowEdit, setBasicInfoWorkShowEdit] = useState(false);
//   const [errorForReportingmanager, seterrorForReportingmanager] = useState(false);
//   const [errorForReportingmanagerType, seterrorForReportingmanagerType] = useState(false);
//   const [reportingManagerList, setreportingManagerList] = useState([{ managerDetails: {}, managerType: {} }]);
//   const [totalRows, setTotalRows] = useState(0);
//   const [perPage, setPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalRowsreport, setTotalRowsreport] = useState(0);
//   const [perPagereport, setPerPagereport] = useState(10);
//   const [currentPagereport, setCurrentPagereport] = useState(1)

//   const [loader, setLoader] = useState(false);
//   const [workInfo, setWorkInfo] = useState(true);
//   const [employeeBasicsDetails, setemployeeBasicsDetails] = useState({
//     department: {},
//     designation: {},
//     employeeType: {},
//     subDepartment: {},
//   });
//   const [workInfoOnBtnClick, setWorkInfoOnBtnClick] = useState(true);
//   const [designationNames, setdesignationNames] = useState([]);
//   const [departments, setdepartments] = useState([]);
//   const [subDepartments, setsubDepartments] = useState([]);
//   const [successAlertWotkinfo, setsuccessAlertWotkinfo] = useState(false);
//   const [managerStatus, setManagerStatus] = useState(false)
//   const getManagerTypes = async (num) => {
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/directory/manager/type/`, { headers: headers });
//       if (response.data) {
//         setManagerTypes(response.data);
//       }
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   };

//   const [rowCount, setRowCount] = useState(0);

//   const getReportingManagers = async (page, size = perPage) => {
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenant.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenant.data?.subdomain,
//     //   }
//     // }
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/directory/v2/employee/manager/${employeeID}/?page=${page}&page_size=${size}`, { headers: headers });
//       if (response.data.statusCode == 200) {
//         let results = response.data.result.results;
//         setRowCount(response.data.result.count);
//         var TotalResult = results.map((item, i) => {
//           item.Num = i + 1;
//           return item;
//         });
//         setTotalRows(response.data.result.count)
//         setreportingManagerList(TotalResult);
//         setLoader(true);
//       } else {
//         setreportingManagerList([]);
//         setLoader(true);
//       }

//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//     }
//   };
//   const getCompanyEmployess = async () => {

//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenet.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//     //   }
//     // }
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/user/active/employees/?company_id=${userinfo.data.id}&employee_ids=${employeeID}&is_manager=True`, { headers: headers });
//       setCompanyEmployess(response.data.data);
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   };
//   const [loaderre, setloaderre] = useState(false)
//   const saveReportingManager = async (data) => {
//     const headers = ApiHeaders(multitenant);
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     seterrorForReportingmanagerType(false)
//     seterrorForReportingmanager(false)
//     if (!getValues("managerType") && !getValues("manager")) {
//       seterrorForReportingmanagerType(true)
//       seterrorForReportingmanager(true)
//       setloaderre(false)
//       return false
//     }
//     if (editApiCondition) {
//       setloaderre(true)
//       seterrorsTodisplay("");
//       var req = {
//         managerType: getValues("managerType"),

//         employee: employeeID,
//       };
//       if (!getValues("managerType")) {
//         seterrorForReportingmanagerType(true)
//       }
//       if (!getValues("manager")) {
//         seterrorForReportingmanager(true)
//       }
//       if (userinfo.data.multitenantKey && multitenant.data) {

//         let id = getValues("manager")
//         let selected = CompanyEmployess.filter(emp => emp.id == id);

//         let selectedcomp = multitenant.data;
//         console.log(selected[0])
//         console.log(selectedcomp[0])

//         req.is_multitenant = true
//         req.multitenant_manager_name = selected[0].employeeName
//         req.multitenant_manager_emp_id = selected[0].workDetails_EmployeeNumber
//         req.multitenant_manager_email = selected[0].officialEmail
//         req.multitenant_manager_company = selectedcomp.companyname
//         req.multitenant_manager_company_domain = selectedcomp.subdomain
//       } else {
//         req.manager = getValues("manager")
//       }


//       if (getValues("managerType") && getValues("manager")) {
//         // let headers = {}
//         // if (multitenet.data) {
//         //   headers = {
//         //     "X-CURRENT-COMPANY": userinfo.subdomain,
//         //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//         //   }
//         // }
//         try {
//           const response = await axios.post(`/api/directory/employee/manager/`, req, { headers: headers, withCredentials: true, });
//           setloaderre(false)
//           setAddReportingManager(false);
//           getReportingManagers(1);
//           setReportingMAddedPopUp(true)
//           setTimeout(() => { setReportingMAddedPopUp(false) }, 3000);
//           console.log(response.data, 'response data')
//           setAddReportingManagerList([]);
//           setValue("manager", "");
//           setValue("managerType", "");
//         } catch (error) {
//           setloaderre(false)
//           if (error.response.status === 401) {
//             SessionLogIn(navigate);
//           }
//           if (error.response.data.data) {
//             if (error.response.data.data.error) {
//               seterrorsTodisplay(error.response.data.data.error);
//             }
//           }
//           if (error.response.data.message) {
//             seterrorsTodisplay(error.response.data.message);
//           }
//           if (error.response.data.error) {
//             seterrorsTodisplay(error.response.data.error);
//           }
//           if (error.response.status === 403) { alert(error.response.data.detail) }
//         }
//       } else {
//         setloaderre(false)
//         return false
//       }
//     } else {

//       if (!getValues("managerType")) {
//         seterrorForReportingmanagerType(true)
//       }
//       if (!getValues("manager")) {
//         seterrorForReportingmanager(true)
//       }
//       var req = {
//         managerType: getValues("managerType"),
//         manager: getValues("manager"),
//         employee: employeeID,
//       };
//       try {
//         const response = await axios.put(`/api/directory/update/employee/manager/${data.id}/`, req, { headers: headers });
//         console.log(response.data, 'response edit data')
//         getReportingManagers(1)
//         setUpdateReportingM(true)
//         setTimeout(() => { setUpdateReportingM(false); getReportingManagerCancel2() }, 3000);
//       } catch (error) {
//         setloaderre(false)
//         if (error.response.status === 401) {
//           SessionLogIn(navigate);
//         }
//         if (error.response.data.data) {
//           if (error.response.data.data.error) {
//             seterrorsTodisplay(error.response.data.data.error);
//           }
//         }
//         if (error.response.data.message) {
//           seterrorsTodisplay(error.response.data.message);
//         }
//         if (error.response.data.error) {
//           seterrorsTodisplay(error.response.data.error);
//         }
//         if (error.response.status === 403) { alert(error.response.data.detail) }
//       }
//     }
//   };
//   const getReportingManagerCancel = () => {
//     setAddReportingManager(!addReportingManager);
//     setAddReportingManagerList([]);

//   };
//   const getReportingManagerCancel2 = () => {
//     setAddReportingManager(false);
//     setEditsReportingManager(!EditsReportingManager);
//   }
//   const handleAdd = () => {
//     setAddReportingManager(true);
//     setEditApiCondition(true);
//     setEditsReportingManager(false);
//     seterrorForReportingmanagerType(false)
//     seterrorForReportingmanager(false)
//     setAddReportingManagerList([...addReportingManagerList, { name: "" }]);
//     reset();
//     seterrorsTodisplay("");


//   };
//   const removeReportingManager = (id) => {
//     let newReportingManagers = [...addReportingManagerList];
//     newReportingManagers.splice(id, 1);
//     setAddReportingManagerList(newReportingManagers);
//     if (addReportingManagerList.length == 1) {
//       setAddReportingManager(false)
//     }
//   };
//   const deleteManagerFromhere = async (id) => {
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.delete(`/api/directory/update/employee/manager/${id}/`, { isDeleted: true }, { headers: headers });
//       setAddReportingManager(false);
//       getReportingManagers(1);
//       setAddReportingManagerList([]);
//       setValue("manager", "");
//       setValue("managerType", "");
//       setSmShow(true);
//       setSmShowe(false)
//       setTimeout(() => { setSmShow(false) }, 3000);
//     } catch (error) {
//       if (error.response.status === 401) {
//         SessionLogIn(navigate);
//       }
//       if (error.response.data.data.error) {
//         seterrorsTodisplay(error.response.data.data.error);
//       }
//       if (error.response.status === 403) { alert(error.response.data.detail) }
//       console.log("not found");
//     }
//   };
//   const [BasicInfoWorkTeamShowAdd, setBasicInfoWorkTeamShowAdd] = useState(false)
//   const [BasicInfoWorkTeamShowEdit, setBasicInfoWorkTeamShowEdit] = useState(false)
//   const [BasicInfoWorkTeamShowdelete, setBasicInfoWorkTeamShowdelete] = useState(false)
//   const handleClose1 = () => setSmShowe(false);

//   const [listofcompany, setlistofcompany] = useState([])
//   const getListOfCompanies = async () => {
//     const headers = ApiHeaders(multitenant);
//     var userinfo = JSON.parse(sessionStorage.getItem('user-info'));
//     if (userinfo.data.multitenantKey && userinfo.data.companyId) {
//       await axios.get(`/api/user/list-multi-tenant-companies/?mul_key=${userinfo.data.multitenantKey}&cmp_id=${userinfo.data.companyId}`, { headers: headers }).then((result) => {
//         console.log(result.data)
//         setlistofcompany(result.data)
//       })

//         .catch((err) => {

//         });
//     }
//   }
//   useEffect(() => {
//     getDepartments();
//     getDesignations();
//     getCompanyEmployess();
//     getReportingManagers(1);
//     getListOfCompanies()
//     getManagerTypes();
//     if (RolesFromDb.modules.MyProfile.submodules.EmploymentDetails.change) {
//       setBasicInfoWorkShowEdit(true)
//     }
//     if (RolesFromDb.modules.MyProfile.submodules.Team.add) {
//       setBasicInfoWorkTeamShowAdd(true)
//     }
//     if (RolesFromDb.modules.MyProfile.submodules.Team.change) {
//       setBasicInfoWorkTeamShowEdit(true)
//     }
//     if (RolesFromDb.modules.MyProfile.submodules.Team.delete) {
//       setBasicInfoWorkTeamShowdelete(true)
//     }

//     getDirectorsList(1)
//     // console.log(multitenet)
//   }, [multitenant]);
//   const loadData = (onLoadData) => {
//     console.log(onLoadData)
//     if (onLoadData.department) {
//       setValue1("department", onLoadData.department.id);
//       changeDepartmentforSub(onLoadData.department.id);

//       setTimeout(() => { setValue1("department", onLoadData.department.id); setValue1("subDepartment", onLoadData.subDepartment.id); }, 1000)
//     }
//     if (onLoadData.designation) {
//       console.log(onLoadData.designation.id)
//       // setValue1("designation", onLoadData.designation.id);
//       setSelectedOption(onLoadData.designation);
//       setTimeout(() => { setSelectedOption(onLoadData.designation); setValue1("jobTitle", onLoadData.jobTitle); }, 1000)
//     }
//     //  setValue1("designation", onLoadData.designation.id);

//     if (onLoadData.designation) {
//       setValue1("selectemployee_grades", onLoadData.employeeGrade.id)
//       setValue1("selectemployee_level", onLoadData.employeeLevel.id)
//       setTimeout(() => {
//         setValue1("selectemployee_grades", onLoadData.employeeGrade.id)
//         setValue1("selectemployee_level", onLoadData.employeeLevel.id)
//       }, 1000)

//     }

//   }
//   useEffect(() => {

//     setTimeout(() => { loadData(onloadData) }, 2000)
//   }, [onloadData])

//   // ////////////////////////////////////////////////////////////////////////  work info    //////////////////////////////////////////////////////////////////////////////////


//   const saveWorkinfowithDepartment = async () => {
//     const headers = ApiHeaders(multitenant);
//     setDisable(true)
//     if (getValues1("department")) {
//       // if (!getValues1("subDepartment")) {
//       //   seterrorFromSubDepartment3("Please select sub department")
//       //   setDisable(false)
//       //   return false;
//       // }
//     }

//     let work_details = {
//       department: getValues1("department"),
//       designation: selectedOption ? selectedOption.id : null,
//       jobTitle: getValues1("jobTitle"),

//     }

//     if (getValues1("subDepartment")) {
//       work_details.subDepartment = getValues1("subDepartment")
//     }
//     if (getValues1("selectemployee_level")) {
//       work_details.employeeLevels = getValues1("selectemployee_level")
//     }
//     if (getValues1("selectemployee_grades")) {
//       work_details.employeeGrade = getValues1("selectemployee_grades")
//     }
//     var req = {
//       work_details: work_details
//     };
//     await axios.patch(`/api/directory/get_update/employee/${employeeID}/`, req, { headers: headers }).then((result) => {
//       setWorkInfo(!workInfo);
//       setWorkInfoOnBtnClick(!workInfoOnBtnClick);
//       setsuccessAlertWotkinfo(true);
//       setTimeout(() => { setsuccessAlertWotkinfo(false) }, 3000);
//       callBack()
//       setDisable(false)
//     })
//       .catch((err) => {
//         if (err.response.status === 401) { SessionLogIn(navigate); setDisable(false) }
//         if (err.response.status === 403) { alert(err.response.data.detail) }
//         console.log("errors", err);
//         setDisable(false)
//       });
//   };
//   const getDesignations = async () => {
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenant.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//     //   };
//     // }

//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/company/v2/designation/details/${userinfo.data.id}/?page_size=1000`, { headers: headers });
//       if (response.data.statusCode == 200) {
//         let results = response.data.result.results;
//         setdesignationNames(results);
//       }
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   };
//   const handlePageChange = page => {
//     getDirectorsList(page);
//     setCurrentPage(page);
//   };
//   const handlePerRowsChange = async (newPerPage, page) => {
//     getDirectorsList(page, newPerPage);
//     setPerPage(newPerPage);
//   };

//   const handlePageChangereport = page => {
//     getReportingManagers(page);
//     setCurrentPagereport(page);
//   };
//   const handlePerRowsChangereport = async (newPerPage, page) => {
//     getReportingManagers(page, newPerPage);
//     setPerPagereport(newPerPage);
//   };

//   const getDirectorsList = async (page, size = perPage) => {

//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     let headers = {}
//     if (multitenant.data) {
//       headers = {
//         "X-CURRENT-COMPANY": userinfo.subdomain,
//         "X-SELECTED-COMPANY": multitenant.data?.subdomain,
//       }
//     }
//     // const headers = ApiHeaders(multitenant);

//     try {
//       const response = await axios.get(`/api/directory/v2/fetch/manager/employee/data/?id=${onloadData.employeeNumber}&page=${page}&page_size=${size}${userinfo.data.multitenantKey !== null ? `&mul_key=${userinfo.data.multitenantKey}` : ""}`, { headers: headers });
//       if (response.data.statusCode == 200) {
//         let results = response.data.result.results.data;
//         var TotalResult = results.map((item, i) => {
//           item.Num = i + 1;
//           return item;
//         });
//         // chandu
//         setManagerStatus(response.data.result.results.isManager)
//         // console.log(response.data.result.results.isManager)
//         setTotalRows(response.data.result.count)
//         setemployeeDiectorsList(TotalResult);
//         setLoader(true);
//       } else {
//         setemployeeDiectorsList([]);
//         setLoader(true);
//       }
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   };
//   console.log(managerStatus);

//   const getDepartments = async () => {
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenet.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//     //   }
//     // }
//     const headers = ApiHeaders(multitenant);

//     try {
//       const response = await axios.get(`/api/company/v2/departments/details/${userinfo.data.id}/?page_size=1000`, { headers: headers });
//       if (response.data.statusCode == 200) {
//         let results = response.data.result.results;
//         setdepartments(results);
//       }

//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   };
//   const changeDepartmentforSub = async (id) => {
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenet.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//     //   }
//     // }
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/company/v2/departments/details/${userinfo.data.id}/?page_size=1000`, { headers: headers });
//       if (response.data.statusCode == 200) {
//         let results = response.data.result.results;
//         var subdepartmnt = results.filter((item) => item.id == id);
//         setsubDepartments(subdepartmnt[0].subDepartments);
//       }
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//     }
//   };

//   useEffect(() => {
//     onchangemultitenetCompanySelect();
//   }, [multitenant])
//   const onchangemultitenetCompanySelect = async () => {
//     var userinfo = JSON.parse(sessionStorage.getItem("user-info"));
//     // let headers = {}
//     // if (multitenet.data) {
//     //   headers = {
//     //     "X-CURRENT-COMPANY": userinfo.subdomain,
//     //     "X-SELECTED-COMPANY": multitenet.data?.subdomain,
//     //   }
//     // }
//     const headers = ApiHeaders(multitenant);
//     try {
//       const response = await axios.get(`/api/user/active/employees/?company_id=${userinfo.data.id}&employee_ids=${employeeID}&is_manager=True`, { headers: headers, withCredentials: true, });
//       setCompanyEmployess(response.data.data);
//     } catch (error) {
//       if (error.response.status === 401) { SessionLogIn(navigate); }
//       console.log("not found");
//     }
//   }
//   const workInfoOnClick = () => {
//     setWorkInfo(!workInfo);
//     setWorkInfoOnBtnClick(!workInfoOnBtnClick);
//     loadData(onloadData)
//     reset1()
//   };

//   const columns = [
//     {
//       name: <span className='fs-6 fw-bold'>Employee Name</span>,
//       selector: (row) => row.employeeName,
//       cell: (row) => (<span title={row.employeeName}>{row.employeeName}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>	Department</span>,
//       selector: (row) => row.employee_WorkDetails_Department_Name,
//       cell: (row) => (<span title={row.employee_WorkDetails_Department_Name}>{row.employee_WorkDetails_Department_Name}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>Designation</span>,
//       selector: (row) => row.employee_WorkDetails_Designation_Name,
//       cell: (row) => (<span title={row.employee_WorkDetails_Designation_Name}>{row.employee_WorkDetails_Designation_Name}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>Type</span>,
//       selector: (row) => row.typeOfManager,
//       cell: (row) => (<span title={row.typeOfManager}>{row.typeOfManager}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//   ]

//   const columns2 = [
//     {
//       name: <span className='fs-6 fw-bold'>Name</span>,
//       selector: (row) => row.managerDetails.name,
//       cell: (row) => (<span title={row.managerDetails.name}>{row.managerDetails.name}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>Company Name</span>,
//       selector: (row) => row.managerDetails.companyName,
//       cell: (row) => (<span title={row.managerDetails.companyName}>{row.managerDetails.companyName}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>Type</span>,
//       selector: (row) => row.managerType.value,
//       cell: (row) => (<span title={row.managerType.value}>{row.managerType.value}</span>),
//       sortable: true,
//       // wrap: true,
//     },

//     {
//       name: <span className='fs-6 fw-bold'>	Department</span>,
//       selector: (row) => row.managerDetails.department,
//       cell: (row) => (<span title={row.managerDetails.department}>{row.managerDetails.department}</span>),
//       sortable: true,
//       // wrap: true,
//     },

//     {
//       name: <span className='fs-6 fw-bold'>Designation</span>,
//       selector: (row) => row.managerDetails.designation,
//       cell: (row) => (<span title={row.managerDetails.designation}>{row.managerDetails.designation}</span>),
//       sortable: true,
//       // wrap: true,
//     },
//     {
//       name: <span className='fs-6 fw-bold'>Actions</span>,
//       selector: (row) => (
//         <>
//           <div className="text-center d-flex">
//             {BasicInfoWorkTeamShowEdit && !inactiveEmployee ?
//               <button type="button" id="MyPro_EmpDet_Team_RM_Modal_EditBtn" className="btn btn-sm border" onClick={() => {
//                 setRemoveButtonCondition(false)
//                 setEditApiCondition(false);
//                 setEditedData(row);
//                 clearErrors();
//                 seterrorsTodisplay("");
//                 setAddReportingManager(false)
//                 setAddReportingManagerList([]);
//                 setEditsReportingManager(true);
//                 setValue("manager", row.managerDetails.id);
//                 setValue("managerType", row.managerType.id);
//               }}>
//                 <AiOutlineEdit />
//               </button> : ""}
//             {BasicInfoWorkTeamShowdelete && !inactiveEmployee ?
//               <button type="button" id="MyPro_EmpDet_Team_RM_Modal_DelBtn" onClick={() => { setDeletedID(row.id); setSmShowe(true) }} className="btn btn-sm border text-danger"><AiOutlineDelete /></button> : ""}
//           </div>

//         </>
//       ),
//       sortable: true,
//     },
//   ]
//   const paginationComponentOptions = {
//     selectAllRowsItem: true,
//     selectAllRowsItemText: 'All',
//   };
//   const generateTooltip = (id, content) => (
//     <Tooltip id={id}>
//       {content}
//     </Tooltip>
//   );
//   const [gradesva, setgradesva] = useState([]);
//   const [levelval, setlevelval] = useState([]);
//   const getemployeeGrades = async () => {
//     const headers = ApiHeaders(multitenant)
//     try {
//       const response = await axios.get(`/api/company/grades/${userinfo.data.id}/?page=1&page_size=999`, { headers: headers });
//       setgradesva(response.data.results);
//     } catch (error) {
//       if (error.response.status === 401) {
//         SessionLogIn(navigate);
//       }
//       if (error.response.status === 404) {
//         alert("Error from backend");
//       }
//       if (error.response.status === 500) {
//         alert("Error from backend");
//       } if (error.response.status == 403) {
//         console.log("You do not have permission to perform this action.");
//         // setViewGrade(false);

//       }
//       // console.log("not found");
//     }
//   };
//   const [viewLevel, setViewLevel] = useState(false);
//   const [addLevel, setAddLevel] = useState(false);
//   const [editLevel, setEditLevel] = useState(false);
//   const [deleteLevel, setDeleteLevel] = useState(false);
//   const [viewGrades, setViewGrades] = useState(false);
//   const [addGrades, setAddGrades] = useState(false);
//   const [editGrades, setEditGrades] = useState(false);
//   const [deleteGrades, setDeleteGrades] = useState(false);

//   const getemployeeLevel = async () => {
//     const headers = ApiHeaders(multitenant)
//     try {
//       const response = await axios.get(`/api/company/levels/?page=1&page_size=999`, { headers: headers });
//       setlevelval(response.data.result.paginatedData.results);
//     } catch (error) {
//       if (error.response.status === 401) {
//         SessionLogIn(navigate);
//       }
//       if (error.response.status === 404) {
//         alert("Error from backend");
//       }
//       if (error.response.status === 500) {
//         alert("Error from backend");
//       }
//       if (error.response.status == 403) {
//         console.log("You do not have permission to perform this action.");
//         // setViewLevel(false);

//       }
//       // console.log("not found");
//     }
//   };
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleSelectChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };
//   useEffect(() => {
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Grades?.add) {
//       setAddGrades(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Grades?.change) {
//       setEditGrades(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Grades?.delete) {
//       setDeleteGrades(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Grades?.view) {
//       setViewGrades(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Levels?.add) {
//       setAddLevel(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Levels?.change) {
//       setEditLevel(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Levels?.delete) {
//       setDeleteLevel(true)
//     }
//     if (RolesFromDb?.modules?.MyProfile?.submodules?.Levels?.view) {
//       setViewLevel(true)
//     }
//     getemployeeGrades()
//     getemployeeLevel()
//   }, [])

//   return (
//     <>
//       <div className='card mt-3 mb-3 Mukta_Font'>
//         <div className='card-header'>
//           <div className='row bg-light'>
//             <div className='col-8 align-self-center'><h4 className='font_20 font_weight_700 text-muted m-0'>Reporting Manager  <OverlayTrigger placement="top" overlay={generateTooltip("tooltip1", "Identify and view information about your reporting manager.")} className=''>
//               <span className='ms-2'><MdInfo className='blue_text InfoTolltip' style={{ fontSize: '16px', margin: '0px 0px 0px -8px' }} /></span>
//             </OverlayTrigger></h4> </div>
//             {BasicInfoWorkTeamShowAdd && !inactiveEmployee ?
//               <div className='col-4 text-end'>
//                 <button type="button" class="actionToolBtn btn bg-transparent" id="MyPro_EmpDet_Team_RM_AddBtn" onClick={() => handleAdd()}  ><span><i class="fa fa-plus bg-success text-white font_18 p-1 rounded-5"></i></span> </button>
//               </div> : ""}
//           </div>
//         </div>

//         <div className='card-body'>
//           <div className='row borderwithshadow Mukta_Font' id="ReportingManager_TableView" style={{ margin: 0 }}>
//             {loader ? (
//               <DataTable
//                 columns={columns2}
//                 data={reportingManagerList}
//                 pagination={rowCount > 9}
//                 fixedHeader
//                 highlightOnHover
//                 subHeader
//                 paginationServer
//                 paginationTotalRows={totalRowsreport}
//                 paginationDefaultPage={currentPagereport}
//                 onChangeRowsPerPage={handlePerRowsChangereport}
//                 onChangePage={handlePageChangereport}
//                 paginationComponentOptions={paginationComponentOptions}
//               />
//             ) : (
//               <div className='text-center'>
//                 <div className='spinner-border ' role='status'>
//                   <span className='sr-only'>Loading...</span>
//                 </div>
//               </div>
//             )}
//             {EditsReportingManager ?
//               <>
//                 <div >
//                   <div className='p-2 flex-grow-1 bd-highlight'>
//                     <div className='row'>
//                       <div className='col-md-4 marginbottom15'>
//                         <select className='form-select profileDetailsInput' id="MyPro_EmpDet_Team_RM_EditSelManager_SelBox" aria-label='Default select example'
//                           {...register("manager", {
//                             required: "this field required",
//                           })}
//                           onChange={() => { seterrorForReportingmanager(false); seterrorsTodisplay("") }}
//                         >
//                           <option value=''>-- Select Manager --</option>
//                           {CompanyEmployess.map((employee, i) => {

//                             return (
//                               <option key={i} value={employee.id}>
//                                 {employee.employeeName}
//                               </option>
//                             )
//                           })}
//                         </select>
//                         {errors.manager && (
//                           <small className='text-danger'>
//                             {errors.manager.message}
//                           </small>
//                         )}
//                         {errorForReportingmanager ? <small className='text-danger'>Please select manager</small> : ""}
//                       </div>
//                       <div className='col-md-4 marginbottom15'>
//                         <select id="MyPro_EmpDet_Team_RM_EditSelType_SelBox"
//                           className='form-select profileDetailsInput'
//                           aria-label='Default select example'
//                           {...register("managerType", {
//                             required: "this field required",
//                           })}
//                           onChange={() => { seterrorForReportingmanagerType(false); seterrorsTodisplay("") }}
//                         >
//                           <option value=''>-- Type --</option>
//                           {managerTypes.map((types, i) => {
//                             return (
//                               <option key={i} value={types.id}>
//                                 {types.value}
//                               </option>
//                             );
//                           })}
//                         </select>
//                         {errors.selectEmployee && (
//                           <small className='text-danger'>
//                             {errors.selectEmployee.message}
//                           </small>
//                         )}
//                         {errorForReportingmanagerType ? <small className='text-danger'>Please select manager type</small> : ""}
//                       </div>
//                       <div className='col-md-2 '></div>
//                       <div className='text-danger'>{errorsTodisplay}</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='text-right m-3 '>
//                   <button
//                     className='btn btn-primary  border border-0 addBtn me-2' id="MyPro_EmpDet_Team_RM_Edit_CancelBtn"
//                     onClick={() => getReportingManagerCancel2()}>
//                     Cancel
//                   </button>
//                   <button
//                     className='btn btn-primary  border border-0 addBtn' id="MyPro_EmpDet_Team_RM_Edit_SaveBtn"
//                     onClick={() => saveReportingManager(editedData)}>
//                     Save
//                   </button>

//                 </div></>
//               : ""}
//             {addReportingManager ? (
//               <div>
//                 <div>
//                   {addReportingManagerList.map((element, id) => (
//                     <div key={element}>
//                       <div className='p-2 flex-grow-1 bd-highlight'>
//                         <div className='row'>

//                           <div className='col-md-3 marginbottom15'>
//                             <select id="MyPro_EmpDet_Team_RM_SelManager_AddSelBox"
//                               className='form-select profileDetailsInput'
//                               aria-label='Default select example'
//                               {...register("manager", {
//                                 required: "this field required",
//                               })}
//                               onChange={() => { seterrorForReportingmanager(false); seterrorsTodisplay("") }}
//                             >
//                               <option value=''>-- Select Manager --</option>
//                               {CompanyEmployess.map((employee, i) => {
//                                 if (id !== employee.id) {
//                                   return (
//                                     <option key={i} value={employee.id}>
//                                       {employee.employeeName}
//                                     </option>
//                                   );
//                                 } else {
//                                   return null;
//                                 }
//                               })}
//                             </select>
//                             {errors.manager && (
//                               <small className='text-danger'>
//                                 {errors.manager.message}
//                               </small>
//                             )}
//                             {errorForReportingmanager ? <small className='text-danger'>Please select manager</small> : ""}
//                           </div>
//                           <div className='col-md-3 marginbottom15'>
//                             <select id="MyPro_EmpDet_Team_RM_SelType_AddSelBox"
//                               className='form-select profileDetailsInput'
//                               aria-label='Default select example'
//                               {...register("managerType", {
//                                 required: "this field required",
//                               })}
//                               onChange={() => { seterrorForReportingmanagerType(false); seterrorsTodisplay("") }}
//                             >
//                               <option value=''>-- Type --</option>
//                               {managerTypes.map((types, i) => {
//                                 return (
//                                   <option key={i} value={types.id}>
//                                     {types.value}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                             {errors.selectEmployee && (
//                               <small className='text-danger'>
//                                 {errors.selectEmployee.message}
//                               </small>
//                             )}
//                             {errorForReportingmanagerType ? <small className='text-danger'>Please select manager type</small> : ""}
//                           </div>

//                           {/* <div className='col-md-2 '></div> */}

//                           {removeButtonCondition ? <div className='col-md-2'>
//                             <button
//                               className='btn btn-outline-danger' id="MyPro_EmpDet_Team_RM_SelManager_RemoveBtn"
//                               onClick={() => {
//                                 removeReportingManager(id);
//                               }}>
//                               x
//                             </button>
//                           </div> : ""}

//                           <div className='text-danger'>{errorsTodisplay}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className='text-right m-3 '>
//                   <button id="MyPro_EmpDet_Team_RM_GetRM_CancelBtn"
//                     className='btn btn-primary  border border-0 addBtn me-2'
//                     onClick={() => getReportingManagerCancel()}>
//                     Cancel
//                   </button>
//                   <button id="MyPro_EmpDet_Team_RM_GetRM_SaveBtn" disabled={loaderre}
//                     className='btn btn-primary  border border-0 addBtn'
//                     onClick={() => saveReportingManager(editedData)}>
//                     Save
//                     {loaderre && (
//                       <div className="spinner-border spinner-border-sm" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     )}
//                   </button>

//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>

//       </div>
//       {managerStatus === true ?
//         <div className='card mt-3 mb-3 Mukta_Font'>
//           <div className='card-header'>
//             <div className='row'>
//               <div className='borderwithline'>
//                 <h4 className='font_20 font_weight_700 text-muted'>Direct Reportees</h4>
//               </div>
//             </div>
//           </div>
//           <div className='card-body'>
//             <div className='Mukta_Font' id="DirectReportees_TableView">
//               {loader ? (
//                 <DataTable
//                   columns={columns}
//                   data={employeeDiectorsList}
//                   pagination={employeeDiectorsList.length > 9}
//                   fixedHeader
//                   highlightOnHover
//                   subHeader
//                   paginationServer
//                   paginationTotalRows={totalRows}
//                   paginationDefaultPage={currentPage}
//                   onChangeRowsPerPage={handlePerRowsChange}
//                   onChangePage={handlePageChange}
//                   paginationComponentOptions={paginationComponentOptions}
//                 />
//               ) : (
//                 <div className='text-center'>
//                   <div className='spinner-border ' role='status'>
//                     <span className='sr-only'>Loading...</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         : ""}
//       <div className='card mt-3 mb-3 Mukta_Font'>
//         <div className='card-header'>
//           <div className='row bg-light'>
//             <div className='col-8 align-self-center'><h4 className='font_20 font_weight_700 text-muted m-0'>Work Info  <OverlayTrigger placement="top" overlay={generateTooltip("tooltip1", "Access general information related to your employment.")} className=''>
//               <span className='ms-2'><MdInfo className='blue_text InfoTolltip' style={{ fontSize: '16px', margin: '0px 0px 0px -8px' }} /></span>
//             </OverlayTrigger></h4> </div>
//             {BasicInfoWorkTeamShowEdit && !inactiveEmployee ?
//               <div className='col-4 text-end'>
//                 {workInfo && <button type='button' className='actionToolBtn btn bg-transparent' id="MyPro_EmpDet_Team_WorkInfo_AddBtn" onClick={() => workInfoOnClick()}> <span> <i className='fa fa-pencil-square-o bg-success text-white font_18 p-1 rounded-5' aria-hidden='true'></i> </span>  </button>}
//               </div> : ""}
//           </div>
//         </div>
//         <div className='card-body Mukta_Font'>
//           <form onSubmit={handleSubmit1(saveWorkinfowithDepartment)}>

//             <div className='row borderwithshadow' style={{ margin: 0 }}>
//               <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>
//                   Designation <span className="text-danger"> *</span>
//                 </label>
//                 <Select
//                   showArrow
//                   labelId="demo-single-select-label"
//                   id="Tk_Mg_Cp_EmpIdSel_SingleSel"
//                   options={designationNames}
//                   isDisabled={workInfoOnBtnClick ? true : false}
//                   getOptionLabel={(option) => option.name}
//                   getOptionValue={(option) => option.id}
//                   placeholder="Select a group"
//                   hidePlaceholder
//                   avoidHighlightFirstOption
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                 // styles={{
//                 //   control: (provided) => ({
//                 //     ...provided,
//                 //     textAlign: selectedOption ? 'right' : 'left',
//                 //     width: "90%",
//                 //   }),
//                 // }}
//                 />
//                 {/* <Multiselect
//                   showArrow
//                   labelId="demo-multiple-checkbox-label"
//                   id="Tk_Mg_Cp_EmpIdSel_MultiSel"
//                   options={designationNames}
//                   displayValue="name"
//                   onSelect={handleGroupSelect}
//                   onRemove={handleGroupRemove}
//                   selectedValues={designationNames.filter(item => GroupIds.includes(item.id))}
//                    showCheckbox
//                   placeholder="Select groups"
//                   hidePlaceholder
//                   avoidHighlightFirstOption
//                   renderOption={(option) => (
//                     <span>{option.name}</span>
//                   )}
//                   renderValue={(selected) =>
//                     selected
//                       .map(item => item.name)
//                       .join(", ")
//                   }
//                 selectedValueDecorator={() => (
//                     <span title={getTitleText()}>{getDisplayText()}</span>
//                 )}
//                 style={{
//                     inputField: {
//                         textAlign: internalSelectedValues.length === 0 ? 'left' : 'right',
//                         width: "90%",
//                     },
//                 }}
//                 /> */}

//                 {/* <select
//                   className='form-select profileDetailsInput' id="MyPro_EmpDet_Team_WorkInfo_DesSelBox"
//                   aria-label='Default select example'
//                   disabled={workInfoOnBtnClick ? true : false}
//                   {...register1("designation", {
//                     required: "This field is required",
//                   })}>
//                   <option value=''>--Select Designation--</option>
//                   {designationNames.map((item, j) => {
//                     return (
//                       <option value={item.id} key={j}>
//                         {item.name}
//                       </option>
//                     );
//                   })}
//                 </select> */}
//                 {/* <small className='text-danger'>{errorFromSubDepartment}</small> */}
//                 {errors1.designation && (
//                   <small className='text-danger'>
//                     {errors1.designation.message}
//                   </small>
//                 )}
//               </div>

//               {/* <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>Job Title</label>

//                 <input
//                   className='form-control' id="MyPro_EmpDet_Team_WorkInfo_JobTitleInput"
//                   type='text'
//                   disabled={workInfoOnBtnClick ? true : false}
//                   {...register1("jobTitle", {
//                     required: "this field is required",
//                   })}
//                 />
//                 <small className='text-danger'>{errorFromSubDepartment1}</small>
//                 {errors1.jobTitle && (
//                   <small className='text-danger'>
//                     {errors1.jobTitle.message}
//                   </small>
//                 )}
//               </div> */}
//               <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>
//                   Department <span className="text-danger"> *</span>
//                 </label>
//                 <select
//                   name='HouseType'
//                   className='form-select profileDetailsInput' id="MyPro_EmpDet_Team_WorkInfo_DeptSelBox"
//                   aria-label='Default select example'
//                   disabled={workInfoOnBtnClick ? true : false}
//                   {...register1("department", {
//                     required: "This field is required",
//                   })}
//                   onChange={(e) => { changeDepartmentforSub(e.target.value); setError1('department', { type: 'custom', message: "" });; setValue1("subDepartment", '') }}>
//                   <option value=''>-- Select Department --</option>
//                   {departments.map((item, i) => {
//                     return (
//                       <option value={item.id} key={i}>
//                         {item.name}
//                       </option>
//                     );
//                   })}
//                 </select>
//                 {/* <small className='text-danger'>{errorFromSubDepartment2}</small> */}
//                 {errors1.department && (
//                   <small className='text-danger'>
//                     {errors1.department.message}
//                   </small>
//                 )}
//               </div>
//               <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>
//                   Sub Department
//                 </label>
//                 <select
//                   name='HouseType'
//                   className='form-select profileDetailsInput' id="MyPro_EmpDet_Team_WorkInfo_SubDeptSelBox"
//                   aria-label='Default select example'
//                   disabled={workInfoOnBtnClick ? true : false}
//                   {...register1("subDepartment")}>
//                   <option value=''>-- Select Sub Department--</option>
//                   {subDepartments.map((item, id) => {
//                     return (
//                       <option value={item.id} key={id}>
//                         {item.name}
//                       </option>
//                     );
//                   })}
//                 </select>
//                 {errors1.subDepartment && (
//                   <small className='text-danger'>
//                     {errors1.subDepartment.message}
//                   </small>
//                 )}
//                 <small className='text-danger'>{errorFromSubDepartment3}</small>
//               </div>
//               {viewGrades && <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>
//                   Grade
//                 </label>
//                 <select
//                   className='form-control form-select'
//                   id='ManageEmp_BulkEdit_EmpType_SelectBox'
//                   disabled={workInfoOnBtnClick || !editGrades}
//                   {...register1("selectemployee_grades", {
//                     // required: "This field is required",
//                   })}
//                 >
//                   <option value=''>Select Type</option>
//                   {gradesva.map((item, l) => {
//                     return (
//                       <option value={item.id} key={l + 900}>
//                         {item.grade}
//                       </option>
//                     );
//                   })}
//                 </select>
//                 {/* {errors1.selectemployee_grades && (
//                   <small className='text-danger'>
//                     {errors1.selectemployee_grades.message}
//                   </small>
//                 )} */}
//                 <small className='text-danger'>{errorFromSubDepartment3}</small>
//               </div>}
//               {viewLevel && <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
//                 <label className='form-field-label formFieldLabel'>
//                   Level
//                 </label>
//                 <select
//                   className='form-control form-select'
//                   id='ManageEmp_BulkEdit_EmpType_SelectBox'
//                   disabled={workInfoOnBtnClick || !editLevel}
//                   {...register1("selectemployee_level", {
//                     // required: "This field is required",

//                   })}
//                 >
//                   <option value=''>Select Type</option>
//                   {levelval.map((item, l) => {
//                     return (
//                       <option value={item.id} key={l + 900}>
//                         {item.level}
//                       </option>
//                     );
//                   })}
//                 </select>
//                 {/* {errors1.selectemployee_level && (
//                   <small className='text-danger'>
//                     {errors1.selectemployee_level.message}
//                   </small>
//                 )} */}
//                 <small className='text-danger'>{errorFromSubDepartment3}</small>
//               </div>}
//               {!workInfoOnBtnClick &&
//                 <div className='text-end mt-4'>
//                   <button
//                     type="button"
//                     className='btn btn-primary border border-0 addBtn me-2' id="MyPro_EmpDet_Team_WorkInfo_CancelBtn"
//                     onClick={() => workInfoOnClick()}>
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className='btn btn-primary pull-right border border-0 addBtn' id="MyPro_EmpDet_Team_WorkInfo_SaveBtn"
//                     disabled={disable}>
//                     Save
//                     {disable && (
//                       <div className="spinner-border spinner-border-sm" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     )}
//                   </button>
//                 </div>}
//             </div>

//           </form>
//         </div>
//       </div>

//       <Modal size='md' show={successAlertWotkinfo} onHide={() => setsuccessAlertWotkinfo(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between'>
//           <h4 className='modal-title fs-5'> Update</h4>
//         </Modal.Header>
//         <ModalBody>
//           <div className='text-success font_54 '> <i className='fa fa-check-circle-o' aria-hidden='true'></i> </div>
//           <h4 className='blue_dark_text font_weight_700'> Work Info Updated Successfully</h4>
//           <div className='text-center m-3'>
//             <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_SaveBtn" onClick={() => { setsuccessAlertWotkinfo(false); }}> OK</button>
//           </div>
//         </ModalBody>
//       </Modal>

//       <Modal size='md' show={smShowe} onHide={() => setSmShowe(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between  modal-header'> Delete </Modal.Header>
//         <div className='text-center m-3 text-danger'> <AiOutlineDelete size='80px' /> </div>
//         <h4 className='text-center'>Are you sure you want to delete this!</h4>
//         <div className='text-center m-3'>
//           <button className='btn btn-primary btn-sm modal2 closeBtn  me-3' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertDelCancelBtn" onClick={handleClose1}> Cancel </button>
//           <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertDelDeleteBtn" onClick={() => deleteManagerFromhere(deletedID)}> Delete</button>
//         </div>
//       </Modal>
//       <Modal size='md' show={smShow} onHide={() => setSmShow(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between  modal-header'>Deleted</Modal.Header>
//         <div className='text-center m-3 text-danger'> <AiOutlineDelete size='80px' /> </div>
//         <h4 className='text-center'>Deleted Successfully</h4>
//         <div className='text-center m-3'>
//           <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertDelConfOkayBtn" onClick={() => { setSmShow(false); }}> Okay </button>
//         </div>
//       </Modal>

//       <Modal size='md' show={reportingMAddedPopUp} onHide={() => setReportingMAddedPopUp(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between  modal-header'>Add</Modal.Header>
//         <div className='text-center m-3'> <FcOk size='80px' /> </div>
//         <h4 className='text-center'>Reporting Manager Added Successfully</h4>
//         <div className='text-center m-3'>
//           <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertRMAddSuccOkayBtn" onClick={() => { setReportingMAddedPopUp(false); }}> Okay </button>
//         </div>
//       </Modal>
//       <Modal size='md' show={updateReportingM} onHide={() => updateReportingM(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between  modal-header'>Updated</Modal.Header>
//         <div className='text-center m-3'> <FcOk size='80px' /></div>
//         <h4 className='text-center'>Reporting Manager Updated Successfully</h4>
//         <div className='text-center m-3'>
//           <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertRMUpdateOkayBtn" onClick={() => { updateReportingM(false); getReportingManagerCancel2() }}> Okay</button>
//         </div>
//       </Modal>
//       <Modal size='md' show={backendErrorMsg} onHide={() => setBackendErrorMsg(false)} backdrop="static" keyboard={false} className='text-center'>
//         <Modal.Header closeButton className='modal-header_box bg-my-primary p-3 d-flex justify-content-between  modal-header'>Error</Modal.Header>
//         <h4 className='text-center'>{backendErrorMsgText}</h4>
//         <div className='text-center m-3'>
//           <button className='btn btn-primary btn-sm modal2 closeBtn' id="MyPro_EmpDet_Team_WorkInfo_Modal_AlertRMErrOkayBtn" onClick={() => { setBackendErrorMsg(false); }}> Okay</button>
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default MyProfileTeam;
