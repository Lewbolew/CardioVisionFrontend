import * as React from 'react';
import 'date-fns';
// @ts-ignore
import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import BasicButton from "../../../ui/components/atoms/BasicButton";
import Select from 'react-select';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



type Props = {
    open: boolean;
    close: () => void;
    addPatient: () => void;
    stenosisScore: number;
    studyTime: Date;
    priority: number;
    handlePriorityChange: (element: any) => void;
    handleStenosisScoreChange: (element: any) => void;
    handleStudyTimeChange: (d: Date | null) => void;
}

const priorityOptions = [
    {label: 'Critical' , value: 2},
    {label: 'Moderate' , value: 1},
    {label: 'Non-critical' , value: 0}
];
const stenosisScoreOptions = [
    {label: '100', value: 100},
    {label: '75', value: 75},
    {label: '50', value: 50},
    {label: '25', value: 25},
];

const findOption = (value: number): {label: string, value: number} => {
    let res: {label: string, value: number} = {
        label:'',
        value: 0
    };
    priorityOptions.forEach(element => {
        if(element.value === value) {
            res = element;
        }
    });
    stenosisScoreOptions.forEach(element => {
        if(element.value === value){
            res = element;
        }
    });
    return res;
};

const getUploadParams = ({ meta }:any) => { return { url: 'https://httpbin.org/post' } };

const handleChangeStatus = ({ meta, file }:any, status:any) => { console.log(status, meta, file) }

const handleSubmit = (files:any) => { console.log(files.map((f:any) => f.meta)) };

const AddPatientModal = (props: Props) => {
    const {
        open,
        close,
        addPatient,
        priority,
        stenosisScore,
        studyTime,
        handlePriorityChange,
        handleStenosisScoreChange,
        handleStudyTimeChange
    } = props;
    return (
        <Modal open={open} onClose={close}>
            <StyledContainer>
                <Heading>Add new Patient</Heading>
                <InputWrapper>
                    <P>Priority: </P>
                    <Select
                        options={priorityOptions}
                        value={findOption(priority)}
                        onChange={handlePriorityChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <P>Stenosis Score: </P>
                    <Select
                        options={stenosisScoreOptions}
                        value={findOption(stenosisScore)}
                        onChange={handleStenosisScoreChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <P>Study Time: </P>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={studyTime}
                            maxDate={new Date()}
                            onChange={handleStudyTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </InputWrapper>

                <InputWrapper>
                    <P>Upload Images: </P>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="image/*,audio/*,video/*"
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <BasicButton title='Add' onClick={() => {
                        addPatient();
                        close();
                    }} />
                </ButtonWrapper>
            </StyledContainer>
        </Modal>

    );
};

const Heading = styled.h3`
    color: #333;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    margin: 24px auto;
    width: 200px;
`;

const InputWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    align-items: center;
    & > div {
        width: 280px;
    }
    & .dzu-dropzone {
        overflow: hidden;
    }
    & .dzu-inputLabel {
        color: #AD1F3A;
        font-size: 18px;
    }
    & .dzu-submitButton {
        display: none;
    }
`;

const P = styled.p`
    color: #333333;
    margin: 0;
    font-size: 1.1em;
    line-height: 40px;
    width: 140px;
    margin-right: 12px;
`;

const StyledContainer = styled.div`
    display:flex;
    max-height: 600px;
    overflow: auto;
    padding: 4px 24px;
    margin-top: 30px;
    margin: 120px auto;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px #00000026;
    background: #fff;
    width: 440px;
    border-radius: 4px;
    
`;

export default AddPatientModal;
