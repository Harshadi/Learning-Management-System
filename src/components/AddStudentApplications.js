import React, { useContext, useState, useEffect, useRef } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Details } from "@material-ui/icons";
import References from "./References";
import "./style.css";
import Logo from "../assets/logo.png";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';


const AddStudentApplications = (props) => {
	const { currentUser } = useContext(AuthContext);
	const [counselorName, setCounselorName] = useState("");
	const [counselorEmail, setCounselorEmail] = useState("");
	const [counselorPhone, setCounselorPhone] = useState("");

	const [candidateName, setCandidateName] = useState("");
	const [candidateEmail, setCandidateEmail] = useState("");
	const [candidatePhone, setCandidatePhone] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [gender, setGender] = useState("");
	const [candidateCity, setCandidateCity] = useState("");
	const [candidateState, setCandidateState] = useState("");
	const [disability, setDisability] = useState("");

	const [programName, setProgramName] = useState("");
	const [programCode, setProgramCode] = useState("");

	const [citizenshipStatus, setCitizenshipStatus] = useState("");
	const [citizenshipCountry, setCitizenshipCountry] = useState("");
	const [birthCountry, setBirthCountry] = useState("");
	const [passportStatus, setPassportStatus] = useState("");

	const [address, setAddress] = useState("");
	const [altaddress, setAltAddress] = useState("");

	const [qualificationName, setQualificationName] = useState("");
	const [qualificationProviderName, setQualificationProviderName] =
		useState("");
	const [qualificationProviderCountry, setQualificationProviderCountry] =
		useState("");
	const [completedStudy, setCompletedStudy] = useState("");

	const [englishProficient, setEnglishProficient] = useState("");

	const [workExperience, setWorkExperience] = useState("");

	const [accomodationService, setAccomodationService] = useState("");

	const [underEighteen, setUnderEighteen] = useState("");
	const [studentName, setStudentName] = useState("");
	console.log(props.location.state);
	const [details, setDetails] = useState("");
	const [counselorDetails, setCounselorDetails] = useState("");
	const [diabilityType, setDiabilityType] = useState('');
	const [programLink, setProgramLink] = useState('');
	const[date, setDate] = useState('');
	const [moreThanOneCitizenship,setMoreThanOneCitizenship ]= useState('');
	const [pincode, setPincode]= useState('');
	const [ passportNumber, setPassportNumber] = useState('');
	const [passportExpiryDate, setPassportExpiryDate] = useState('');
	const [passportIssueCountry, setPassportIssueCountry] = useState('');
	const [educationCountry, setEducationCountry] = useState('');
	const [highestEducationLevel, setHighestEducationLevel] = useState('');
	const [institutionName, setInstitutionName] = useState('');
	const [studyCountry, setStudyCountry] = useState('');
	const [studyState, setStudyState] = useState('');
	const [studyCity, setStudyCity] = useState('');
	const [degreeAwarded, setDegreeAwarded] = useState('');
	const [backlogs, setBacklogs] = useState('');
	const [degreeScore, setDegreeScore] = useState('');
	const [passportIssueDate, setPassportIssueDate] = useState('');
	const [primaryLanguage, setPrimaryLanguage]=useState('');
	const [degreeStartDate, setDegreeStartDate] = useState('');
	const [degreeEndDate, setDegreeEndDate]= useState('');
	const [hscBoardName, setHscBoardName] = useState('');
	const [hscInstituteName, setHscInstituteName] = useState('');
	const [hscStudyCountry, setHscStudyCountry] = useState('');
	const [hscStudyState, setHscStudyState] = useState('');
	const [hscStudyCity, setHscStudyCity] = useState('');
	const [hscQualification, setHscQualification] = useState('');
	const [hscScore, setHscScore] = useState('');
	const [hscPrimaryLanguage, setHscPrimaryLanguage] = useState('');
	const [hscStartDate, setHscStartDate] = useState('');
	const [hscEndDate, setHscEndDate] = useState('');
	const [sscBoardName, setSscBoardName] = useState('');
	const [sscInstituteName, setSscInstituteName] = useState('');
	const [sscStudyCountry, setSscStudyCountry] = useState('');
	const [sscStudyState, setSscStudyState] = useState('');
	const [sscStudyCity, setSscStudyCity] = useState('');
	const [sscDegreeAwarded, setSscDegreeAwarded] = useState('');
	const [sscScore, setSscScore] = useState('');
	const [sscPrimaryLanguage,setSscPrimaryLanguage] = useState('');
	const [sscStartDate, setSscStartDate] = useState('');
	const [sscEndDate, setSscEndDate] = useState('');
	const [workOrganization, setWorkOrganization] = useState('');
	const [workPosition, setWorkPosition]= useState('');
	const [workJobProfile, setWorkJobProfile] = useState('');
	const [workDatefrom, setWorkDatefrom] = useState('');
	const [workDateTo, setWorkDateTo]= useState('');
	const [workModeOfSalary, setWorkModeOfSalary] = useState('');
	const [workCurrentlyWorking, setWorkCurrentlyWorking] = useState('');
	const [greScore, setGreScore] = useState('');
	const [greDateOfExamination, setGreDateOfExamination] = useState('');
	const [greQuantitative, setGreQuantitative] = useState('');
	const [greVerbal, setGreVerbal] = useState('');
	const [greAnalyticalWriting, setGreAnalyticalWriting] = useState('');
	const [gmatScore, setGmatScore] = useState('');
	const [gmatDateOfExamination , setGmatDateOfExamination] = useState('');
	const [gmatQuantitative, setGmatQuantitative] = useState('');
	const [gmatVerbal, setGmatVerbal] = useState('');
	const [gmatAnalyticalWriting, setGmatAnalyticalWriting] = useState('');
	const [gmatIntegratedReasoning, setGmatIntegratedReasoning] = useState('');
	const [toeflScore, setToeflScore] = useState('');
	const [toeflDateOfExamination, setToeflDateOfExamination] = useState('');
	const [toeflReading, setToeflReading] = useState('');
	const [toeflListening, setToeflListening] = useState('');
	const [toeflSpeaking, setToeflSpeaking] = useState('');
	const [toeflWriting, setToeflWriting] = useState('');
	const [ieltsScore, setIeltsScore] = useState('');
	const [ieltsDateOfExamination, setIeltsDateOfExamination] = useState('');
	const [ieltsReading, setIeltsReading] = useState('');
	const [ieltsListening , setIeltsListening] = useState('');
	const [ieltsSpeaking, setIeltsSpeaking] = useState('');
	const [ieltsWriting, setIeltsWriting] = useState('');
	const [ieltsTrfNo, setIeltsTrfNo] = useState('');
	const [pteScore, setPteScore] = useState('');
	const [pteDateoOfExamination, setPteDateoOfExamination] = useState('');
	const [pteReading, setPteReading]= useState('');
	const [pteListening, setPteListening] = useState('');
	const [pteSpeaking, setPteSpeaking] = useState('');
	const [pteWriting, setPteWriting] = useState('');
	const [detScore, setDetScore] = useState('');
	const [detDateOfExamination, setDetDateOfExamination] = useState('');
	const [satScore, setSatScore] = useState('');
	const [satDateOfExamination , setSatDateOfExamination] = useState('');
	const [satReadingAndWriting, setSatReadingAndWriting] = useState('');
	const [satMath, setSatMath] = useState('');
	const [satEssay, setSatEssay] = useState('');
	const [actScore, setActScore] = useState('');
	const [actDateOfExamination, setActDateOfExamination] = useState('');
	const [actMath , setActMath] = useState('');
	const [actReading, setActReading] = useState('');
	const [actScience, setActScience] = useState('');
	const [actEnglish, setActEnglish]  = useState('');
	const [actWriting, setActWriting] = useState('');
	const [appliedImmigration, setAppliedImmigration] = useState('');
	const [medicalCondition, setMedicalCondition] = useState('');
	const [visaRefusal, setVisaRefusal] = useState('');
	const [criminalOffence, setCriminalOffence] = useState('');
	const [emergencyName, setEmergencyName] = useState('');
	const [emergencyPhone, setEmergencyPhone] = useState('');
	const [emergencyEmail, setEmergencyEmail] = useState('');
	const [applicantRelation, setApplicantRelation] = useState('');
	const [visaRefusalReason, setVisaRefusalReason] = useState('');
	const [mastersInstitutionName, setMastersInstitutionName]  = useState('');
	const [mastersStudyCountry, setMastersStudyCountry] = useState('');
	const [mastersDegreeAwarded, setMastersDegreeAwarded] = useState('');
	const [mastersBacklogs, setMastersBacklogs] = useState('');
	const [mastersDegreeScore, setMastersDegreeScore] = useState('');
	const [mastersDegreeStartDate, setMastersDegreeStartDate] = useState('');
	const [mastersDegreeEndDate, setMastersDegreeEndDate] = useState('');
	const [mastersStudyState , setMastersStudyState] = useState('');
	const [mastersStudyCity, setMastersStudyCity] = useState('');


	const location = useLocation();
	const history = useHistory();
	useEffect(() => {
		firebaseConfig
			.firestore()
			.collection("counselor")
			.doc(currentUser.uid)
			.collection("studentDetails")
			.doc(props.location.state.detail)

			.get()
			.then((snapshot) => {
				console.log(snapshot.data());
				setDetails(snapshot.data());
				setCandidateName(snapshot.data().studentName);
				setCandidateEmail(snapshot.data().studentEmail);
				setCandidatePhone(snapshot.data().studentPhone);
				setDateOfBirth(snapshot.data().dateOfBirth);
				setCandidateCity(snapshot.data().studentCity);
				setCitizenshipCountry(snapshot.data().citizenship);
				setCounselorEmail(currentUser.email);

				console.log("name", candidateName);

				console.log("country", details.country);

				console.log("details", details);
			});

		firebaseConfig
			.firestore()
			.collection("counselor")
			.doc(currentUser.uid)
			.get()
			.then((snapshot) => {
				setCounselorDetails(snapshot.data());
				setCounselorName(snapshot.data().counselor_name);
			});
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		setCounselorEmail(counselorEmail);
		setCounselorName(counselorName);
		setCounselorPhone(counselorPhone);

		setCandidateName(candidateName);
		setCandidateEmail(candidateEmail);
		setCandidatePhone(candidatePhone);
		setDateOfBirth(dateOfBirth);
		setGender(gender);
		setCandidateState(candidateState);
		setCandidateCity(candidateCity);
		setDisability(disability);
		setDiabilityType(diabilityType);

		setProgramName(programName);
		setProgramCode(programCode);
		setProgramLink(programLink);
		setDate(date);

		setCitizenshipStatus(citizenshipStatus);
		setCitizenshipCountry(citizenshipCountry);
		setBirthCountry(birthCountry);
		setPassportStatus(passportStatus);
		setMoreThanOneCitizenship(moreThanOneCitizenship);

		setAddress(address);
		setAltAddress(altaddress);
		setPincode(pincode);

		setPassportNumber(passportNumber);
		setPassportIssueDate(passportIssueDate);
		setPassportExpiryDate(passportExpiryDate);
		setPassportIssueCountry(passportIssueCountry);

		setEducationCountry(educationCountry);
		setHighestEducationLevel(highestEducationLevel);
		setInstitutionName(institutionName);
		setStudyCountry(studyCountry);
		setStudyState(studyState);
		setStudyCity(studyCity);


		setDegreeAwarded(degreeAwarded);
		setBacklogs(backlogs);	
		setDegreeScore(degreeScore);
		setPrimaryLanguage(primaryLanguage);
		setDegreeStartDate(degreeStartDate);
		setDegreeEndDate(degreeEndDate);
		
		
	


		setHscBoardName(hscBoardName);
		setHscInstituteName(hscInstituteName);
		setHscStudyCountry(hscStudyCountry);
		setHscStudyState(hscStudyState);
		setHscStudyCity(hscStudyCity);
		setHscQualification(hscQualification);
		setHscScore(hscScore);
		setHscPrimaryLanguage(hscPrimaryLanguage);
		setHscStartDate(hscStartDate);
		setHscEndDate(hscEndDate);

	
		setSscBoardName(sscBoardName);
		setSscInstituteName(sscInstituteName);
		setSscStudyCountry(sscStudyCountry);
		setSscStudyState(sscStudyState);
		setSscStudyCity(sscStudyCity);
		setSscDegreeAwarded(sscDegreeAwarded);
		setSscScore(sscScore);
		setSscPrimaryLanguage(sscPrimaryLanguage);
		setSscStartDate(sscStartDate);
		setSscEndDate(sscEndDate);
		setMastersInstitutionName(mastersInstitutionName);
		setMastersStudyCountry(mastersStudyCountry);
		setMastersDegreeAwarded(mastersDegreeAwarded);
		setMastersBacklogs(mastersBacklogs);
		setMastersDegreeScore(mastersDegreeScore);
		setMastersDegreeStartDate(mastersDegreeStartDate);
		setMastersDegreeEndDate(mastersDegreeEndDate);
		setMastersStudyState(mastersStudyState);
		setMastersStudyCity(mastersStudyCity);


	
		setWorkOrganization(workOrganization);
		setWorkPosition(workPosition);
		setWorkJobProfile(workJobProfile);
		setWorkDatefrom(workDatefrom);
		setWorkDateTo(workDateTo);
		setWorkModeOfSalary(workModeOfSalary);
		


		setGreScore(greScore);
		setGreDateOfExamination(greDateOfExamination);
		setGreQuantitative(greQuantitative);
		setGreVerbal(greVerbal);
		setGreAnalyticalWriting(greAnalyticalWriting);
		setGmatScore(gmatScore);
		setGmatDateOfExamination(gmatDateOfExamination);
		setGmatQuantitative(gmatQuantitative);
		setGmatVerbal(gmatVerbal);
		setGmatAnalyticalWriting(gmatAnalyticalWriting);
		setGmatIntegratedReasoning(gmatIntegratedReasoning);
		setToeflScore(toeflScore);
		setToeflDateOfExamination(toeflDateOfExamination);
		setToeflReading(toeflReading);
		setToeflListening(toeflListening);
		setToeflSpeaking(toeflSpeaking);
		setToeflWriting(toeflWriting);
		setIeltsScore(ieltsScore);
		setIeltsDateOfExamination(ieltsDateOfExamination);
		setIeltsReading(ieltsReading);	
		setIeltsListening(ieltsListening);
		setIeltsSpeaking(ieltsSpeaking);
		setIeltsWriting(ieltsWriting);
		setIeltsTrfNo(ieltsTrfNo);
		setPteScore(pteScore);	
		setPteDateoOfExamination(pteDateoOfExamination);
		setPteReading(pteReading);
		setPteListening(pteListening);	
		setPteSpeaking(pteSpeaking);
		setPteWriting(pteWriting);
		setDetScore(detScore);
		setDetDateOfExamination(detDateOfExamination);
		setSatScore(satScore);	
		setSatDateOfExamination(satDateOfExamination);
		setSatReadingAndWriting(satReadingAndWriting);
		setSatMath(satMath);
		setSatEssay(satEssay);
		setActScore(actScore);
		setActDateOfExamination(actDateOfExamination);
		setActMath(actMath);
		setActReading(actReading);	
		setActScience(actScience);
		setActEnglish(actEnglish);
		setActWriting(actWriting);


		setAppliedImmigration(appliedImmigration);
		setMedicalCondition(medicalCondition);
		setVisaRefusal(visaRefusal);
		setCriminalOffence(criminalOffence);
		setEmergencyName(emergencyName);
		setEmergencyPhone(emergencyPhone);
		setEmergencyEmail(emergencyEmail);
		setApplicantRelation(applicantRelation);
		setVisaRefusalReason(visaRefusalReason);


		setQualificationName(qualificationName);
		setQualificationProviderCountry(qualificationProviderCountry);
		setQualificationProviderName(qualificationProviderName);
		setCompletedStudy(completedStudy);
		setWorkCurrentlyWorking(workCurrentlyWorking);
		

		setEnglishProficient(englishProficient);

		setWorkExperience(workExperience);

		setAccomodationService(accomodationService);

		setUnderEighteen(underEighteen);

		try {
			const db = firebaseConfig.firestore();
			var currentUser = firebaseConfig.auth().currentUser;

			db.collection("counselor")
				.doc(currentUser.uid)
				.collection("studentDetails")
				.doc(props.location.state.detail)
				.collection("studentApplications")
				.add({
					applicationStatus: "ApplicationFormFilled",
					counselorPhone: counselorPhone,
					counselorName: counselorName,
					counselorEmail: counselorEmail,

					candidateEmail: candidateEmail,
					candidateName: candidateName,
					candidatePhone: candidatePhone,
					dateOfBirth: dateOfBirth,
					gender: gender,

					candidateState: candidateState,
					disability: disability,
					diabilityType:diabilityType,

					programCode: programCode,
					programName: programName,
					programLink:programLink,
					date: date,

					citizenshipCountry:citizenshipCountry,
					citizenshipStatus: citizenshipStatus,
					birthCountry: birthCountry,
					passportStatus: passportStatus,
					moreThanOneCitizenship:moreThanOneCitizenship,

					address: address,
					altaddress: altaddress,

					pincode:pincode,
					passportIssueDate:passportIssueDate,
					passportExpiryDate:passportExpiryDate,
					passportNumber:passportNumber,
					passportIssueCountry:passportIssueCountry,

					educationCountry:educationCountry,
					highestEducationLevel:highestEducationLevel,
					institutionName:institutionName,
					studyCountry:studyCountry,
					studyState:studyState,
					studyCity:studyCity,
					

					degreeAwarded:degreeAwarded,
					backlogs:backlogs,
					degreeScore:degreeScore,
					primaryLanguage:primaryLanguage,
					degreeStartDate:degreeStartDate,
					degreeEndDate:degreeEndDate,
					mastersInstitutionName:mastersInstitutionName,
					mastersStudyCountry:mastersStudyCountry,
					mastersDegreeAwarded:mastersDegreeAwarded,
					mastersBacklogs:mastersBacklogs,
					mastersDegreeScore:mastersDegreeScore,
					mastersDegreeStartDate:mastersDegreeStartDate,
					mastersDegreeEndDate:mastersDegreeEndDate,
					mastersStudyState:mastersStudyState,
					mastersStudyCity:mastersStudyCity,



					hscBoardName:hscBoardName,
					hscInstituteName:hscInstituteName,
					hscStudyCountry:hscStudyCountry,
					hscStudyState:hscStudyState,
					hscStudyCity:hscStudyCity,
					hscQualification:hscQualification,
					hscScore:hscScore,
					hscPrimaryLanguage:hscPrimaryLanguage,	
					hscStartDate:hscStartDate,
					hscEndDate:hscEndDate,


					sscBoardName:sscBoardName,
					sscInstituteName:sscInstituteName,
					sscStudyCountry:sscStudyCountry,
					sscStudyState:sscStudyState,
					sscStudyCity:sscStudyCity,
					sscDegreeAwarded:sscDegreeAwarded,
					sscScore:sscScore,
					sscPrimaryLanguage:sscPrimaryLanguage,
					sscStartDate:sscStartDate,
					sscEndDate:sscEndDate,

	
					workOrganization:workOrganization,
					workPosition:workPosition,
					workJobProfile:workJobProfile,
					workDatefrom:workDatefrom,
					workDateTo:workDateTo,
					workModeOfSalary:workModeOfSalary,
					workCurrentlyWorking:workCurrentlyWorking,


					greScore:greScore,
					greDateOfExamination:greDateOfExamination,		
					greQuantitative:greQuantitative,
					greVerbal:greVerbal,
					greAnalyticalWriting:greAnalyticalWriting,
					gmatScore:gmatScore,
					gmatDateOfExamination:gmatDateOfExamination,
					gmatQuantitative:gmatQuantitative,
					gmatVerbal:gmatVerbal,
					gmatAnalyticalWriting:gmatAnalyticalWriting,
					gmatIntegratedReasoning:gmatIntegratedReasoning,	
					toeflScore:toeflScore,
					toeflDateOfExamination:toeflDateOfExamination,
					toeflReading:toeflReading,
					toeflListening:toeflListening,
					toeflSpeaking:toeflSpeaking,
					toeflWriting:toeflWriting,
					ieltsScore:ieltsScore,
					ieltsDateOfExamination:ieltsDateOfExamination,
					ieltsReading:ieltsReading,
					ieltsListening:ieltsListening,
					ieltsSpeaking:ieltsSpeaking,
					ieltsWriting:ieltsWriting,
					ieltsTrfNo:ieltsTrfNo,
					pteScore:pteScore,
					pteDateoOfExamination:pteDateoOfExamination,
					pteReading:pteReading,	
					pteListening:pteListening,
					pteSpeaking:pteSpeaking,
					pteWriting:pteWriting,
					detScore:detScore,	
					detDateOfExamination:detDateOfExamination,
					satScore:satScore,
					satDateOfExamination:satDateOfExamination,
					satReadingAndWriting:satReadingAndWriting,
					satMath:satMath,
					satEssay:satEssay,
					actScore:actScore,
					actDateOfExamination:actDateOfExamination,
					actMath:actMath,
					actReading:actReading,
					actScience:actScience,
					actEnglish:actEnglish,
					actWriting:actWriting,



					appliedImmigration:appliedImmigration,
					medicalCondition:medicalCondition,
					visaRefusal:visaRefusal,
					criminalOffence:criminalOffence,
					emergencyName:emergencyName,
					emergencyPhone:emergencyPhone,
					emergencyEmail:emergencyEmail,
					applicantRelation:applicantRelation,
					visaRefusalReason:visaRefusalReason,



					qualificationProviderName: qualificationProviderName,
					qualificationProviderCountry: qualificationProviderCountry,
					qualificationName: qualificationName,
					completedStudy: completedStudy,
					

					englishProficient: englishProficient,

					workExperience: workExperience,

					accomodationService: accomodationService,

					underEig: underEighteen,
				});

			db.collection("counselor")
				.doc(currentUser.uid)
				.collection("studentDetails")
				.doc(props.location.state.detail)
				
				.update({
					applicationStatus: "In Progress",
				});

			console.log("student added");
			history.push({
				pathname: "/studentapplications",
				detail: props.location.state.detail,
				state: { detail: props.location.state.detail },
			});
			// console.log(currentStudent);
			// console.log(currentUser.DisplayName);
			// console.log(currentUser.password);

			// db.collection("counselor").doc(currentUser.uid).set({
			// 	uid: currentUser.uid,
			// 	counselor_name: currentUser.displayName,
			// 	counselor_email: currentUser.email,
			// });
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div>



<AppBar position="fixed">
  <Toolbar>
    
    <Typography  variant="h6" style={{flexGrow: 1}}>
    <a style={{color: 'white'}} href="/dashboard"> Dashboard</a>
    </Typography>
 <Typography  variant="h6" style={{flexGrow: 1}}>
    <a style={{color: 'white'}} href="/applicants"> Applicants</a>
    </Typography>
 <Typography  variant="h6" style={{flexGrow: 1}}>
    <a style={{color: 'white'}} href="/applications"> Applications</a>
    </Typography>

<Typography  variant="h6" style={{flexGrow: 1}}>
    <a style={{color: 'white'}} href="/references">References</a>
    </Typography>
<Typography  variant="h6" style={{flexGrow: 1}}>
    <a style={{color: 'white'}} onClick={() => firebaseConfig.auth().signOut()}> SignOut</a>
    </Typography>

  
  </Toolbar>
</AppBar>



			{/* <Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<img src={Logo} alt="logo" width="100" />
							<Nav.Link href="/references" className="signoutBtn">
								References
							</Nav.Link>
							<Nav.Link
								onClick={() => firebaseConfig.auth().signOut()}
								className="signoutBtn"
							>
								SignOut
							</Nav.Link>

							<Nav.Link href="/applications" className="signoutBtn">
								Applications
							</Nav.Link>
							<Nav.Link href="/applicants" className="signoutBtn">
								Applicants
							</Nav.Link>
							<Nav.Link href="/dashboard" className="signoutBtn">
								Dashboard
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}
<br/><br/><br/><br/>
			<div>
				<section className="signup">
					<div className="container mt-5">
						<div className="signup-form">
							<h2 className="AddStudentTitle">
								Applying for {props.location.state.univ} :
							</h2>
							<div className="AddStudentformBody">
								<form className="addStudentFormBody" onSubmit={handleSubmit}>
									<h3 className="AddStudentTitle">Agent Details</h3> <hr />
									<input
										className="AddStudentInput"
										type="text"
										name="counselorName"
										placeholder="Counselor Name"
										counselorName={counselorName}
										value={counselorName}
										onChange={(e) => setCounselorName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="counselorEmail"
										placeholder="Counselor Email"
										counselorEmail={counselorEmail}
										value={counselorEmail}
										onChange={(e) => setCounselorEmail(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										pattern="[789][0-9]{9}"
										name="counselorPhone"
										placeholder="Counselor Phone"
										counselorPhone={counselorPhone}
										value={counselorPhone}
										onChange={(e) => setCounselorPhone(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Personal Information</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="candidateName"
										placeholder="Student Name"
										candidateName={candidateName}
										value={candidateName}
										onChange={(e) => setCandidateName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="email"
										name="candidateEmail"
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
										placeholder="Candidate Email"
										candidateEmail={candidateEmail}
										value={candidateEmail}
										onChange={(e) => setCandidateEmail(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="candidatePhone"
										pattern="[789][0-9]{9}"
										placeholder="Candidate Phone"
										candidatePhone={candidatePhone}
										value={candidatePhone}
										onChange={(e) => setCandidatePhone(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="dateOfBirth"
										placeholder="Date of Birth"
										dateOfBirth={dateOfBirth}
										value={dateOfBirth}
										onChange={(e) => setDateOfBirth(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="candidateState"
										placeholder="Candidate State"
										candidateState={candidateState}
										value={candidateState}
										onChange={(e) => setCandidateState(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="candidateCity"
										placeholder="Candidate City"
										candidateCity={candidateCity}
										value={candidateCity}
										onChange={(e) => setCandidateCity(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gender"
										placeholder="Male / Female / Transgender"
										gender={gender}
										value={gender}
										onChange={(e) => setGender(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="disability"
										placeholder="Does the candidate have any kind of disability?"
										disability={disability}
										value={disability}
										onChange={(e) => setDisability(e.target.value)}
									/>
									<br />
									<br />
									{
										disability=='yes'?(

											<input
										className="AddStudentInput"
										type="text"
										name="disabilitytype"
										diabilityType={diabilityType}
										value={diabilityType}
										placeholder="What disability does the candidate have?"	
										onChange={(e)=>{setDiabilityType(e.target.value)}}
										
									/>

										):(
											null
										)
									}
									<br />
									<br />
									<h3 className="AddStudentTitle">Program Selection</h3> <hr />
									<input
										className="AddStudentInput"
										type="text"
										name="programName"
										placeholder="Name of the Program"
										programName={programName}
										value={programName}
										onChange={(e) => setProgramName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="programCode"
										placeholder="Program Code"
										programCode={programCode}
										value={programCode}
										onChange={(e) => setProgramCode(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="programLink"
										placeholder="Program Link"
										programLink={programLink}
										value={programLink}
										required
										onChange={(e)=>{setProgramLink(e.target.value)
										setDate(Date().toLocaleString())
										}}
										/>
									<br />
									<br />


									<h3 className="AddStudentTitle">
										Citizenship Information
									</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="citizenshipStatus"
										placeholder="Status Of Citizenship"
										citizenshipStatus={citizenshipStatus}
										value={citizenshipStatus}
										onChange={(e) => setCitizenshipStatus(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="citizenshipCountry"
										placeholder="Citizenship Country"
										citizenshipCountry={citizenshipCountry}
										value={citizenshipCountry}
										onChange={(e) => setCitizenshipCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="birthCountry"
										placeholder="Country of Birth"
										birthCountry={birthCountry}
										value={birthCountry}
										onChange={(e) => setBirthCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="passportStatus"
										placeholder="Does the Candidate have Passport?"
										passportStatus={passportStatus}
										value={passportStatus}
										onChange={(e) => setPassportStatus(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="numberOfCitizenship"
										placeholder="Is the applicant a citizen of more than one country?"
										moreThanOneCitizenship={moreThanOneCitizenship}
										value={moreThanOneCitizenship}
										onChange={(e)=>{setMoreThanOneCitizenship(e.target.value)}}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Contact Details</h3> <hr />
									<input
										className="AddStudentInput"
										type="text"
										name="address"
										placeholder="Address of the Candidate"
										address={address}
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="altAddress"
										placeholder="Alternative Address of Candidate"
										altaddress={altaddress}
										value={altaddress}
										onChange={(e) => setAltAddress(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pincode"
										placeholder="Pincode"
										pincode={pincode}
										value={pincode}
										onChange={(e) => setPincode(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Passport Information</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="passportNumber"
										placeholder="Passport Number"
										passportNumber={passportNumber}
										value={passportNumber}
										onChange={(e) => setPassportNumber(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="passportIssueDate"
										placeholder="Passport Issue Date"
										passportIssueDate={passportIssueDate}
										value={passportIssueDate}	
										onChange={(e) => setPassportIssueDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="passportExpiryDate"
										placeholder="Passport Expiry Date"
										passportExpiryDate={passportExpiryDate}
										value={passportExpiryDate}	
										onChange={(e) => setPassportExpiryDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="passportIssueCountry"
										placeholder="Passport Issue Country"
										passportIssueCountry={passportIssueCountry}
										value={passportIssueCountry}
										onChange={(e) => setPassportIssueCountry(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Education Summary</h3> <hr />
									{/* highest secondary qualification */}
									<input
										className="AddStudentInput"
										type="text"
										name="educationCountry"
										educationCountry={educationCountry}
										value={educationCountry}
										placeholder="Country of Education"
										onChange={(e) => setEducationCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="highestEducationLevel"
										placeholder="Highest level of education"
										highestEducationLevel={highestEducationLevel}
										value={highestEducationLevel}
										onChange={(e) => setHighestEducationLevel(e.target.value)}
									/>
									<br />
									<br />


									<h3> Masters Degree </h3>
									<input
										className="AddStudentInput"
										type="text"
										name="mastersInstitutionName"
										placeholder="Name of the Institution"
										mastersInstitutionName={mastersInstitutionName}
										value={mastersInstitutionName}
										onChange={(e) => setMastersInstitutionName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersStudyCountry"
										placeholder="Country of Study"
										mastersStudyCountry={mastersStudyCountry}	
										value={mastersStudyCountry}
										onChange={(e) => setMastersStudyCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersStudyState"
										placeholder="State of Study"
										mastersStudyState={mastersStudyState}
										value={mastersStudyState}
										onChange={(e) => setMastersStudyState(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersStudyCity"
										placeholder="City of Study"
										mastersStudyCity={mastersStudyCity}
										value={mastersStudyCity}
										onChange={(e) => setMastersStudyCity(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersDegreeAwarded"
										placeholder="Qualification Achieved/Degree Awarded"
										mastersDegreeAwarded={mastersDegreeAwarded}	
										value={mastersDegreeAwarded}
										onChange={(e) => setMastersDegreeAwarded(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersBacklogs"
										placeholder="Backlogs"
										mastersBacklogs={mastersBacklogs}
										value={mastersBacklogs}
										onChange={(e) => setMastersBacklogs(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersDegreeScore"
										placeholder="Score"
										mastersDegreeScore={mastersDegreeScore}
										value={mastersDegreeScore}
										onChange={(e) => setMastersDegreeScore(e.target.value)}
									/>
									<br />
									<br />
									
									<input
										className="AddStudentInput"
										type="text"
										name="mastersDegreeStartDate"
										placeholder="Start Date"
										mastersDegreeStartDate={mastersDegreeStartDate}
										value={mastersDegreeStartDate}
										onChange={(e) => setMastersDegreeStartDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="mastersDegreeEndDate"
										placeholder="End Date"
										mastersDegreeEndDate={mastersDegreeEndDate}
										value={mastersDegreeEndDate}
										onChange={(e) => setMastersDegreeEndDate(e.target.value)}
									/>
									<br />
									<br />


									<h3> Undergraduate </h3>
									<input
										className="AddStudentInput"
										type="text"
										name="institutionName"
										placeholder="Name of the Institution"
										institutionName={institutionName}
										value={institutionName}
										onChange={(e) => setInstitutionName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="studyCountry"
										placeholder="Country of Study"
										studyCountry={studyCountry}	
										value={studyCountry}
										onChange={(e) => setStudyCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="studyState"
										placeholder="State of Study"
										studyState={studyState}
										value={studyState}
										onChange={(e) => setStudyState(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="studyCity"
										placeholder="City of Study"
										studyCity={studyCity}
										value={studyCity}
										onChange={(e) => setStudyCity(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="degreeAwarded"
										placeholder="Qualification Achieved/Degree Awarded"
										degreeAwarded={degreeAwarded}	
										value={degreeAwarded}
										onChange={(e) => setDegreeAwarded(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="backlogs"
										placeholder="Backlogs"
										backlogs={backlogs}
										value={backlogs}
										onChange={(e) => setBacklogs(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="degreeScore"
										placeholder="Score"
										degreeScore={degreeScore}
										value={degreeScore}
										onChange={(e) => setDegreeScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="primaryLanguage"
										placeholder="Primary language of instruction"
										primaryLanguage={primaryLanguage}
										value={primaryLanguage}
										onChange={(e) => setPrimaryLanguage(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="degreeStartDate"
										placeholder="Start Date"
										degreeStartDate={degreeStartDate}
										value={degreeStartDate}
										onChange={(e) => setDegreeStartDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="degreeEndDate"
										placeholder="End Date"
										degreeEndDate={degreeEndDate}
										value={degreeEndDate}
										onChange={(e) => setDegreeEndDate(e.target.value)}
									/>
									<br />
									<br />
									<h3>Grade 12th or equivalent</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="hscBoardName"
										placeholder="Name of Board"
										hscBoardName={hscBoardName}
										value={hscBoardName}
										onChange={(e) => setHscBoardName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscInstituteName"
										placeholder="Name of Institution"
										hscInstituteName={hscInstituteName}
										value={hscInstituteName}
										onChange={(e) => setHscInstituteName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscStudyCountry"
										placeholder="Country of Study"
										hscStudyCountry={hscStudyCountry}
										value={hscStudyCountry}
										onChange={(e) => setHscStudyCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscStudyState"
										placeholder="State of Study"
										hscStudyState={hscStudyState}
										value={hscStudyState}
										onChange={(e) => setHscStudyState(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscStudyCity"
										placeholder="City of Study"
										hscStudyCity={hscStudyCity}
										value={hscStudyCity}
										onChange={(e) => setHscStudyCity(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscQualification"
										placeholder="Qualification Achieved / Degree Awarded"
										hscQualification={hscQualification}
										value={hscQualification}
										onChange={(e) => setHscQualification(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscScore"
										placeholder="Score(12th)"
										hscScore={hscScore}	
										value={hscScore}
										onChange={(e) => setHscScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscPrimaryLanguage"
										placeholder="Primary Language of Intruction"
										hscPrimaryLanguage={hscPrimaryLanguage}
										value={hscPrimaryLanguage}
										onChange={(e) => setHscPrimaryLanguage(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscStartDate"
										placeholder="Start Date"
										hscStartDate={hscStartDate}
										value={hscStartDate}
										onChange={(e) => setHscStartDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="hscEndDate"
										placeholder="End Date"
										hscEndDate={hscEndDate}
										value={hscEndDate}
										onChange={(e) => setHscEndDate(e.target.value)}
									/>
									<br />
									<br />
									<h3> Grade 10th or equivalent</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="sscBoardName"
										placeholder="Name of Board"
										sscBoardName={sscBoardName}
										value={sscBoardName}
										onChange={(e) => setSscBoardName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscInstituteName"
										placeholder="Name of the Institution"
										sscInstituteName={sscInstituteName}
										onChange={(e) => setSscInstituteName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscStudyCountry"
										placeholder="Country of Study"
										sscStudyCountry={sscStudyCountry}
										value={sscStudyCountry}
										onChange={(e) => setSscStudyCountry(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscStudyState"
										placeholder="State of Study"
										sscStudyState={sscStudyState}	
										value={sscStudyState}
										onChange={(e) => setSscStudyState(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscStudyCity"
										placeholder="City of Study"
										sscStudyCity={sscStudyCity}
										value={sscStudyCity}
										onChange={(e) => setSscStudyCity(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscDegreeAwarded"
										placeholder="Qualification Achieved / Degree Awarded"	
										sscDegreeAwarded={sscDegreeAwarded}
										value={sscDegreeAwarded}
										onChange={(e) => setSscDegreeAwarded(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscScore"
										placeholder="Score"
										sscScore={sscScore}
										value={sscScore}
										onChange={(e) => setSscScore(e.target.value)}

									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscPrimaryLanguage"
										placeholder="Primary Language of instruction"
										sscPrimaryLanguage={sscPrimaryLanguage}	
										value={sscPrimaryLanguage}
										onChange={(e) => setSscPrimaryLanguage(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscStartDate"
										placeholder="Start Date"
										sscStartDate={sscStartDate}
										value={sscStartDate}
										onChange={(e) => setSscStartDate(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="sscEndDate"
										placeholder="End Date"
										sscEndDate={sscEndDate}
										value={sscEndDate}
										onChange={(e) => setSscEndDate(e.target.value)}
									/>
									<br />
									<br />
									{/*
<input
									className="AddStudentInput"
										type="text"
										name="qualificationName"
										placeholder="Name of the highest secondary qualification"
										qualificationName={qualificationName}
										value={qualificationName}
										onChange={(e) =>setQualificationName(e.target.value)}
									/>
<br/><br/>
									<input
									className="AddStudentInput"
										type="text"
										name="qualificationProviderCountry"
										placeholder="Country of the Qualification Provider"
										qualificationProviderCountry={qualificationProviderCountry}
										value={qualificationProviderCountry}
										onChange={(e) => setQualificationProviderCountry(e.target.value)}
									/>
									<br/><br/>

<input
									className="AddStudentInput"
										type="text"
										name="qualificationProviderName"
										placeholder="Name of the Qualification Provider"
										qualificationProviderName={qualificationProviderName}
										value={qualificationProviderName}
										onChange={(e) => setQualificationProviderName(e.target.value)}
									/>
									<br/><br/>

<input
									className="AddStudentInput"
										type="text"
										name="completedStudy"
										placeholder="Is the Above study completed ?"
										completedStudy={completedStudy}
										value={completedStudy}
										onChange={(e) => setCompletedStudy(e.target.value)}
									/>
<br/><br/>

*/}
									<h3 className="AddStudentTitle">English Proficiency</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="englishProficient"
										placeholder="Proficiency Level in English "
										englishProficient={englishProficient}
										value={englishProficient}
										onChange={(e) => setEnglishProficient(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Work Experience</h3> <hr />
									<input
										className="AddStudentInput"
										type="text"
										name="workExperience"
										placeholder="Do you have any relevant work experience ? "
										workExperience={workExperience}
										value={workExperience}
										onChange={(e) => setWorkExperience(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workOrganization"
										placeholder="Name of the Organization & Address"
										workOrganization={workOrganization}
										value={workOrganization}
										onChange={(e) => setWorkOrganization(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workPosition"
										placeholder="Position"
										workPosition={workPosition}
										value={workPosition}
										onChange={(e) => setWorkPosition(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workJobProfile"
										placeholder="Job Profile"
										workJobProfile={workJobProfile}
										value={workJobProfile}
										onChange={(e) => setWorkJobProfile(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workDatefrom"
										placeholder="Working from"
										workDatefrom={workDatefrom}	
										value={workDatefrom}
										onChange={(e) => setWorkDatefrom(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workDateTo"
										placeholder="Working upto"
										workDateTo={workDateTo}
										value={workDateTo}
										onChange={(e) => setWorkDateTo(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workModeOfSalary"
										placeholder="Mode of salary"
										workModeOfSalary={workModeOfSalary}
										value={workModeOfSalary}
										onChange={(e) => setWorkModeOfSalary(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="workCurrentlyWorking"
										placeholder="Currently working here?"
										workCurrentlyWorking={workCurrentlyWorking}
										value={workCurrentlyWorking}
										onChange={(e) => setWorkCurrentlyWorking(e.target.value)}
									/>
									<br />
									<br />
									<h3>Tests</h3>
									<h3>GRE</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="greScore"
										placeholder="Overall Score"
										greScore={greScore}
										value={greScore}
										onChange={(e) => setGreScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="greDateOfExamination"
										placeholder="Date of Examination"
										greDateOfExamination={greDateOfExamination}
										value={greDateOfExamination}
										onChange={(e) => setGreDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="greQuantitative"
										placeholder="Quantitative"
										greQuantitative={greQuantitative}
										value={greQuantitative}
										onChange={(e) => setGreQuantitative(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="greVerbal"
										placeholder="Verbal"	
										greVerbal={greVerbal}
										value={greVerbal}
										onChange={(e) => setGreVerbal(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="greAnalyticalWriting"
										placeholder="Analytical Writing"
										greAnalyticalWriting={greAnalyticalWriting}
										value={greAnalyticalWriting}
										onChange={(e) => setGreAnalyticalWriting(e.target.value)}
									/>
									<br />
									<br />
									<h3>GMAT</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="gmatScore"
										placeholder="Overall Score"
										gmatScore={gmatScore}
										value={gmatScore}
										onChange={(e) => setGmatScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gmatDateOfExamination"
										placeholder="Date of Examination"
										gmatDateOfExamination={gmatDateOfExamination}
										value={gmatDateOfExamination}
										onChange={(e) => setWorkExperience(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gmatQuantitative"
										placeholder="Quantitative"
										gmatQuantitative={gmatQuantitative}
										value={gmatQuantitative}
										onChange={(e) => setGmatQuantitative(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gmatVerbal"
										placeholder="Verbal"
										gmatVerbal={gmatVerbal}	
										value={gmatVerbal}
										onChange={(e) => setGmatVerbal(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gmatAnalyticalWriting"
										placeholder="Analytical Writing"
										gmatAnalyticalWriting={gmatAnalyticalWriting}
										value={gmatAnalyticalWriting}
										onChange={(e) => setGmatAnalyticalWriting(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="gmatIntegratedReasoning"
										placeholder="Integrated Reasoning"
										gmatIntegratedReasoning={gmatIntegratedReasoning}
										value={gmatIntegratedReasoning}
										onChange={(e) => setGmatIntegratedReasoning(e.target.value)}
									/>
									<br />
									<br />
									<h3>TOEFL</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="toeflScore"
										placeholder="Overall Score"
										toeflScore={toeflScore}
										value={toeflScore}
										onChange={(e) => setToeflScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="toeflDateOfExamination"
										placeholder="Date of Examination"
										toeflDateOfExamination={toeflDateOfExamination}
										value={toeflDateOfExamination}
										onChange={(e) => setToeflDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="toeflReading"
										placeholder="Reading"
										toeflReading={toeflReading}
										value={toeflReading}
										onChange={(e) => setToeflReading(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="toeflListening"
										placeholder="Listening"
										toeflListening={toeflListening}
										value={toeflListening}
										onChange={(e) => setToeflListening(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="toeflSpeaking"
										placeholder="Speaking"
										toeflSpeaking={toeflSpeaking}
										value={toeflSpeaking}
										onChange={(e) => setToeflSpeaking(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="toeflWriting"
										placeholder="Writing"
										toeflWriting={toeflWriting}
										value={toeflWriting}
										onChange={(e) => setToeflWriting(e.target.value)}
									/>
									<br />
									<br />
									<h3>IELTS</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsScore"
										placeholder="Overall Score"
										ieltsScore={ieltsScore}
										value={ieltsScore}
										onChange={(e) => setIeltsScore(e.target.value)}
	
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsDateOfExamination"
										placeholder="Date of Examination"
										ieltsDateOfExamination={ieltsDateOfExamination}
										value={ieltsDateOfExamination}
										onChange={(e) => setIeltsDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsReading"
										placeholder="Reading"
										ieltsReading={ieltsReading}
										value={ieltsReading}
										onChange={(e) => setIeltsReading(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsListening"
										placeholder="Listening"
										ieltsListening={ieltsListening}
										value={ieltsListening}
										onChange={(e) => setIeltsListening(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsSpeaking"
										placeholder="Speaking"
										ieltsSpeaking={ieltsSpeaking}
										value={ieltsSpeaking}
										onChange={(e) => setIeltsSpeaking(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsWriting"
										placeholder="Writing"
										ieltsWriting={ieltsWriting}
										value={ieltsWriting}
										onChange={(e) => setIeltsWriting(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="ieltsTrfNo"
										placeholder="TRF NO."	
										ieltsTrfNo={ieltsTrfNo}	
										value={ieltsTrfNo}
										onChange={(e) => setIeltsTrfNo(e.target.value)}
									/>
									<br />
									<br />
									<h3>PTE</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="pteScore"
										placeholder="Overall Score"
										pteScore={pteScore}
										value={pteScore}
										onChange={(e) => setPteScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pteDateoOfExamination"
										placeholder="Date of Examination"
										pteDateoOfExamination={pteDateoOfExamination}
										value={pteDateoOfExamination}
										onChange={(e) => setPteDateoOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pteReading"
										placeholder="Reading"
										pteReading={pteReading}
										value={pteReading}
										onChange={(e) => setPteReading(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pteListening"
										placeholder="Listening"
										pteListening={pteListening}
										value={pteListening}
										onChange={(e) => setPteListening(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pteSpeaking"
										placeholder="Speaking"
										pteSpeaking={pteSpeaking}	
										value={pteSpeaking}
										onChange={(e) => setPteSpeaking(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="pteWriting"
										placeholder="Writing"
										pteWriting={pteWriting}
										value={pteWriting}
										onChange={(e) => setPteWriting(e.target.value)}
									/>
									<br />
									<br />
									<h3>DET</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="detScore"
										placeholder="Overall Score"
										detScore={detScore}
										value={detScore}
										onChange={(e) => setDetScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="detDateOfExamination"
										placeholder="Date of Examination"
										detDateOfExamination={detDateOfExamination}
										value={detDateOfExamination}
										onChange={(e) => setDetDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<h3>SAT</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="satScore"
										placeholder="Overall Score"
										satScore={satScore}
										value={satScore}
										onChange={(e) => setSatScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="satDateOfExamination"
										placeholder="Date of Examination"
										satDateOfExamination={satDateOfExamination}
										value={satDateOfExamination}
										onChange={(e) => setSatDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="satReadingAndWriting"
										placeholder="Reading & Writing"
										satReadingAndWriting={satReadingAndWriting}
										value={satReadingAndWriting}
										onChange={(e) => setSatReadingAndWriting(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="satMath"
										placeholder="Math"
										satMath={satMath}
										value={satMath}
										onChange={(e) => setSatMath(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="satEssay"
										placeholder="Essay"
										satEssay={satEssay}
										value={satEssay}
										onChange={(e) => setSatEssay(e.target.value)}
									/>
									<br />
									<br />
									<h3>ACT</h3>
									<input
										className="AddStudentInput"
										type="text"
										name="actScore"
										placeholder="Overall Score"
										actScore={actScore}
										value={actScore}
										onChange={(e) => setActScore(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actDateOfExamination"
										placeholder="Date of Examination"
										actDateOfExamination={actDateOfExamination}
										value={actDateOfExamination}
										onChange={(e) => setActDateOfExamination(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actMath"
										placeholder="Math"
										actMath={actMath}
										value={actMath}
										onChange={(e) => setActMath(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actReading"
										placeholder="Reading"
										actReading={actReading}
										value={actReading}
										onChange={(e) => setActReading(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actScience"
										placeholder="Science"
										actScience={actScience}
										value={actScience}
										onChange={(e) => setActScience(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actEnglish"
										placeholder="English"
										actEnglish={actEnglish}
										value={actEnglish}
										onChange={(e) => setActEnglish(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="actWriting"
										placeholder="Writing"
										actWriting={actWriting}
										value={actWriting}
										onChange={(e) => setActWriting(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">
										Accomodation Services
									</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="accomodationService"
										placeholder="Do you want to avail any accomodation service ? "
										accomodationService={accomodationService}
										value={accomodationService}
										onChange={(e) => setAccomodationService(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">
										Background Information
									</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="appliedImmigration"
										placeholder="Has applicant applied for any type of immigration into any country?"
										appliedImmigration={appliedImmigration}	
										value={appliedImmigration}
										onChange={(e) => setAppliedImmigration(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="medicalCondition"
										placeholder="Does applicant suffer from a serious medical condition?"
										medicalCondition={medicalCondition}
										value={medicalCondition}
										onChange={(e) => setMedicalCondition(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="visaRefusal"
										placeholder="Has applicant Visa refusal for any country?"
										visaRefusal={visaRefusal}
										value={visaRefusal}
										onChange={(e) => setVisaRefusal(e.target.value)}
									/>
									<br />
									<br />

{(visaRefusal == 'yes')|| (visaRefusal == 'Yes')?(
<>

									<input
										className="AddStudentInput"
										type="text"
										name="visaRefusalReason"
										placeholder="What was the reason of visa Refusal?"
										visaRefusalReason={visaRefusalReason}
										value={visaRefusalReason}
										onChange={(e) => setVisaRefusalReason(e.target.value)}
									/>
									<br />
									<br />
</>
):(null)}


									<input
										className="AddStudentInput"
										type="text"
										name="criminalOffence"
										placeholder="Has applicant ever been convicted of a criminal offence?"
										criminalOffence={criminalOffence}
										value={criminalOffence}
										onChange={(e) => setCriminalOffence(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">Important Contacts</h3> <hr />
									<input
										className="AddStudentInput"
										type="text"
										name="emergencyName"
										placeholder="Name"	
										emergencyName={emergencyName}
										value={emergencyName}
										onChange={(e) => setEmergencyName(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="emergencyPhone"
										placeholder="Phone"
										emergencyPhone={emergencyPhone}
										value={emergencyPhone}
										onChange={(e) => setEmergencyPhone(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="emergencyEmail"
										placeholder="Email"
										emergencyEmail={emergencyEmail}	
										value={emergencyEmail}
										onChange={(e) => setEmergencyEmail(e.target.value)}
									/>
									<br />
									<br />
									<input
										className="AddStudentInput"
										type="text"
										name="applicantRelation"
										placeholder="Relation with Applicant"
										applicantRelation={applicantRelation}
										value={applicantRelation}
										onChange={(e) => setApplicantRelation(e.target.value)}
									/>
									<br />
									<br />
									<h3 className="AddStudentTitle">
										Parent / Legal Guardian Details
									</h3>{" "}
									<hr />
									<input
										className="AddStudentInput"
										type="text"
										name="underEighteen"
										placeholder="Are you under 18? "
										underEighteen={underEighteen}
										value={underEighteen}
										onChange={(e) => setUnderEighteen(e.target.value)}
									/>
									<br />
									<br />
									
									 <hr />
									<button className="addStudentSubmitBtn" type="submit">
										Submit the Application
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AddStudentApplications;
