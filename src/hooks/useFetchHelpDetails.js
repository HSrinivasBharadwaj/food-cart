import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {ONBOARDING_URI,LEGAL_URI,FAQ_URI } from '../utils/constants';

const useFetchHelpDetails = () => {
    const [partnerOnboardingDetails, setPartnerOnboardingDetails] = useState([]);
    const [legalDetails, setLegalDetails] = useState([]);
    const [faqDetails, setFaqDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchOnBoardingDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(ONBOARDING_URI);
            setPartnerOnboardingDetails(response.data.data.issues)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    } 
    const fetchFaqDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(FAQ_URI);
            // console.log(response.data.data.issues)
            setFaqDetails(response.data.data.issues)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    } 
    const fetchLegalDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(LEGAL_URI);
            setLegalDetails(response.data.data.issues)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    } 
    useEffect(() => {
        fetchOnBoardingDetails()
        fetchFaqDetails()
        fetchLegalDetails()
    },[])
  return {partnerOnboardingDetails,loading,error,legalDetails,faqDetails}
}

export default useFetchHelpDetails