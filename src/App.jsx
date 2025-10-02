import Final from './assets/FINAL.svg'
import Visibility from "./assets/track.svg"
import Vector  from "./assets/Vector.svg"
import Engagement from "./assets/Engagements.svg"
import Timeline from "./assets/timelines.svg"
import Notification from "./assets/notification.svg"
import Archive from  "./assets/filearchive.svg"
import Works from "./assets/upload01.svg"
import Sharebynd from "./assets/share02.svg"
import Trackview from "./assets/track03.svg"
import Arrow from "./assets/arrow.png"
import Review from "./assets/qoutes.svg"
import Profile from "./assets/profiles.svg"
import Correct from "./assets/corrects.svg"
import Button from "./component/button.jsx"
import Faaq from "./FAQ/faaq"
import Footer from "./footer/footer.jsx"
import Bynd from "./assets/byndlogo.svg"
import './App.css'
function App() {

  return (
  <div>
    <div className='navbar'>
 <img src={Bynd} alt='BYND'></img>
<ul>
  <li>Features</li>
  <li>How it Works </li>
  <li>FAQs</li>
  <li>Pricing</li>
  <li>Contact</li>
</ul>
<ul>
  <li>Login</li>
  <li><Button /></li>
</ul>
    </div>
<div className='mainpage'>
  <h2>Know when your<br></br> 
    <span>design</span> gets noticed
  </h2>
  <h6>Track views,time spent,and recruiter engagement on every design<br></br> assignment you send-so you never submit blind again</h6>
<Button />
 <img className='dashboard'src={Final} alt='image'></img>
<div className='submain'>
<h2>Everything you <span>need</span></h2>
<h6>Track views,gain insights,and stay in control-effortlessly</h6>
<div className='track'>
  <img src={Visibility} alt='Visibility'></img><br></br>
  <h6>Track View</h6>
  <p>Get real-time updates on whether your <br></br>assignment has been viewed — and when.</p>
</div>
<div className='track'>
  <img src={Vector} alt='Vector'></img><br></br>
  <h6>View Insights</h6>
  <p>Track how much time recruiters spend on<br></br> your submission and how often they return.</p>
</div>
<div className='track'>
  <img src={Engagement} alt='Engagement'></img><br></br>
  <h6>Engagement Score</h6>
  <p>We calculate an engagement score so you <br></br> know which companies are truly interested.</p>
</div>
<div className='track'>
  <img src={Timeline} alt='Timeline'></img><br></br>
  <h6>Timeline View</h6>
  <p>A simple graph showing how recruiters<br></br> engaged with your assignment over time..</p>
</div>
<div className='track'>
  <img src={Notification} alt='Notification'></img><br></br>
  <h6>Real-time Notifications</h6>
  <p>Get email and in-app notifications when<br></br> your work is viewed — no more guessing.</p>
</div>
<div className='track'>
  <img src={Archive} alt='Archive'></img><br></br>
  <h6>Assignment Archive</h6>
  <p>Keep all your design assignments organized,<br></br> secure, and easily accessible in one place..</p>
</div>
</div>
<h2 >How it <span>works</span></h2>
<h6>Just 3 easy steps to track your design assignments</h6>
<div className='works'>
<div className='working'>
  <h1>01</h1>
  <h3>UPLOAD YOUR <br></br> ASSIGNMENT</h3>
  <p>Just paste your Figma, PDF, or <br></br>assignment link—simple, fast, and <br></br>secure sharing.</p>
  <img src={Works} alt='works'></img>
</div>
<div className='working'>
  <h1>02</h1>
  <h3>SHARE BYND <br></br>LINK</h3>
  <p>Your BYND link is unique,secure,and <br></br>view-tracked.Just copy and share it <br></br>with the recruiter.</p>
  <img src={Sharebynd} alt='Sharebynd'></img>
</div>
<div className='working'>
  <h1>03</h1>
  <h3>TRACK VIEWS <br></br>INSTANTLY</h3>
  <p>See if your assignment was viewed,<br></br>when it was opened, and how many<br></br>times-all from your BYND Dashboard.</p>
  <img src={Trackview} alt='Trackview'></img>
</div>
</div>
<div className='dxt-bottom'>
<button className='button'>Start tracking for free <img src={Arrow}></img></button>
</div>
<h2>What they <span>say</span></h2>
<h6>Early praise from the Design Community </h6>
<div className='reviews'>
<div className='review'>
  <img src={Review} alt='Review'></img>
  <p>’’I can see which of my assignments<br></br> were opened thanks to The BYND which<br></br> in turn helps me in following up with the<br></br> recruiting team.’’</p>
 <img src={Profile} alt='profile'></img>
 <h5>Hitesh Yadav</h5>
 <p>Product Design Intern</p>
</div>
<div className='review'>
  <img src={Review} alt='Review'></img>
  <p>‘’It's so discouraging to spend hours on a<br></br> design assignment and then just hear <br></br>nothing. With The BYND, at least I could <br></br>track if someone checked my work.’’</p>
 <img src={Profile} alt='profile'></img>
 <h5>Vandana Trivedi</h5>
 <p>Associate UI UX Designer</p>
</div>
<div className='review'>
  <img src={Review} alt='Review'></img>
  <p>‘’With 1000s of designers applying,<br></br> knowing exactly when your work is <br></br>viewed is crucial.The BYND shows me<br></br>when my assignment is opened—and it<br></br>truly makes a difference.’’</p>
 <img src={Profile} alt='profile'></img>
 <h5>Harrison Ray</h5>
 <p>Freelance Designer transitioning to full-time</p>
</div>
</div>
<h2>Choose the <span>plan</span> that's right for you</h2>
<div className='plans'>
  <div className='freetier'>
    <h3>Free Tier</h3>
    <h3>$0<p>per month</p></h3>
    <p><img src={Correct} alt='Correct' />3 Assignment Submissions</p>
    <p><img src={Correct} alt='Correct' />View Status (Viewed / Not Viewed)</p>
    <p><img src={Correct} alt='Correct' />Secure Link Sharing</p>
  </div>
  <div className='protier'>
    <h3>Pro Tier</h3>
    <h3>$12<p>per month</p></h3>
    <button className='tierbutton'>Best value</button>
    <p>Everything in Free, Plus</p>
    <p><img src={Correct} alt='Correct' />Unlimited submissions</p>
    <p><img src={Correct} alt='Correct' />Instant notifications when design is viewed</p>
    <p><img src={Correct} alt='Correct' />First & last viewed timestamps</p>
    <p><img src={Correct} alt='Correct' />Assignment metrics dashboard</p>
    <p><img src={Correct} alt='Correct' />Engagement score</p>
    <p><img src={Correct} alt='Correct' />Views over time (Graph)</p>
    <p><img src={Correct} alt='Correct' />Smart tracking links</p>
    <p>No credit card required</p>
  </div>
</div>
<p>Billed monthly. Cancel anytime.</p>
<button className='button'>Start tracking for free <img src={Arrow}></img></button>
<Faaq />
<Footer />
</div>
</div>

  )
}

export default App



