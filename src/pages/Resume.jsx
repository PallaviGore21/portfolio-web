import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function Resume() {
    const now = 98;
    const now1 = 80;
    const now2 = 85;
    const now3 = 95;
    const now4 = 80;
    const now5 = 80;


    return <>

 <Timeline position="alternate">
      <TimelineItem>
     
      <TimelineOppositeContent><img src="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw=" alt="" height={400} width={600} /></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><div class="row" data-bs-theme="">
                <div className='card'>
                        <div className="card-body">
                <div class="col-sm-10">
                        <br />
                        <h1>Experience</h1>
                        <br />
                        <div class="card-resume">
                            <div class="card-header"><h3>Skillhub IT solution pvt. ltd.</h3>
                            </div>

                            <span>internship (mar-2022 to mar-2023)
                            </span>
                            <br />

                            <hr />
                            <div class="card-body pt-3 ">
                            Developed web applications Used Frontentechnology such as : HTML, CSS, TAILWINDMATERIAL-UI, BOOTSTRAP, JAVASCRIPT, REACTREDUX, REDUX-TOOLKIT,RTKQUERY, FIREBASE. Participated in team-building activities tenhance working experienc. Developed and implemented performancimprovement strategies and plans to promotcontinuous improvement
                                <br />
                            </div>
                        </div>
                    </div>
                  </div>
                  </div>

                    </div></TimelineContent>
      
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent><img src="https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg?w=2000" alt="" height={400} width={600} /></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>   <div className='card'>
                        <div className="card-body">
                     <div className='row'>

                    <div class="col-sm-10 ">
                        <h1>Education Quality</h1>
                        <br />
                        <div class="card-resume">
                            <div class="card-header"><h3> Batchler of Science</h3>
                            </div>

                            <span>Shiv Chhatrapati college of Aurangabad</span>
                            <br />

                            <hr />
                            <div class="card-body pt-3 ">
                                The Bachelor of Science (B.Sc.) degree is mainly awarded to students in the areas of Natural Sciences, Business & Management, Engineering Sciences, Mathematics, and Informatics. Universities like Cambridge and Oxford offer B.A. degrees for all their undergraduate studies, including research and scientific programmes.
                                <br />
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                       </div></TimelineContent>
      </TimelineItem>
    </Timeline>
      
            <div class="container">
                    
                <br /><br />
                <div class="row">
                    <div class="col-sm-6">
                        <div className='card '>
                            <h3>Feature</h3>
                            <h2>Development skill</h2>
                            <div>HTML</div>
                            <ProgressBar className='' now={now} label={`${now}%`} />
                            <br />
                            <div>CSS</div>
                            <ProgressBar now={now1} label={`${now1}%`} />
                            <br />
                            <div>JAVASCRIPT</div>
                            <ProgressBar now={now2} label={`${now2}%`} />
                            <br />
                            <div>BOOTSTRAP</div>
                            <ProgressBar now={now3} label={`${now3}%`} />
                            <br />
                            <div>REACT JS</div>
                            <ProgressBar now={now4} label={`${now4}%`} />
                            <br />
                            <div>REDUX</div>
                            <ProgressBar now={now5} label={`${now5}%`} />
                            <br />
                        </div>
                    </div>

                </div>
            </div>






            


    </>
}
