import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function UserStoriesReview() {

    // get the data for user stories on page load/reload
    useEffect(() => {
        dispatch({
            type: 'GET_USER_STORIES'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();

    const userStories = useSelector((store) => store.userStories)

    return (
        <>
            <div className="center">
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Story
                                </TableCell>
                                <TableCell>
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {userStories.map(story => (
                                <TableRow key={story.id}>
                                    <TableCell>
                                        {story.title}:
                                        <br></br>
                                        {story.story}
                                    </TableCell>
                                    <TableCell>

                                        {/* pushes to edit user story page */}
                                        <Button variant="contained" color="success" onClick={() =>
                                            dispatch({
                                                type: 'APPROVE_USER_STORY',
                                                payload: story.id
                                            })}>Approve</Button>

                                        {/* Space between buttons */}
                                        &nbsp;

                                        {/* dispatches delete request */}
                                        <Button variant="contained" color="error" onClick={() =>
                                            dispatch({
                                                type: 'DELETE_STORY',
                                                payload: story.id
                                            })}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default UserStoriesReview;