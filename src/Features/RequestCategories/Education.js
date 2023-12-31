
import { useState } from "react";
import ServiceRequestCard from "../../Components/ServiceReqestCard";
import useFetchData from "../../CustomHooks/useFetchData";
import Spinner from "../Spinner"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddMessages from "../AddMessages";

export default function Education () {
    const {data, refetch} = useFetchData('https://settlers-hub-server.vercel.app/servicerequests/listservicerequset')
    console.log("request data:", data)
    const [message, setMessage] = useState(false)
    const [postIdToMessage, setPostIdToMessage] = useState('')
    console.log("message post id:", postIdToMessage)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    if (!data) {
        return <Spinner />;
      }


    const education = data.serviceRequestAds.filter((item) => item.category === "Education")
    console.log("educational req:", education)
   

    const  handleRequestMessage = (_id) => {
    
        console.log("message for service req id:", _id)
        setPostIdToMessage(_id)
        console.log("set message post id:", _id)
        setMessage(true)
    
      }

    const handleCloseMessage = () => {
        setMessage (false)
        refetch()
    }

    return(
        <div>
            {
                education.map((item) => {
                    const {_id, subject, location, createdAt, description} = item
                    const created = new Date (createdAt)
                    const year = created.getFullYear()
                    const month = created.getMonth() + 1
                    const day = created.getDate()

                    return(
                        <ServiceRequestCard handleMessage={() => handleRequestMessage(item._id)}
                                            key={_id}
                                            _id={_id}
                                            subject={subject}
                                            location={location}
                                            description={description}
                                            createdAt = {`${year}-${month}-${day}`}/>
                    )
                })
            }
            { message ? (     <div>
        <Modal sx={style}
        open={message}
        onClose={handleCloseMessage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Message{" "}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AddMessages  postId={postIdToMessage}
                              handleCloseMessage ={handleCloseMessage}/>
          </Typography>
        </Box>
      </Modal>
            </div>): (null)
       
            }
        </div>
    )
}
