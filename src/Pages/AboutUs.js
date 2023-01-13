import GitHubIcon from '@mui/icons-material/GitHub';

function greetings() {
  console.log("bzz")
  if (new Date().getHours() < 12) {
    return 'morning';
  } else if (new Date().getHours() < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  };
};

function AboutUs() {
  return (
    <div>
      <h1>Good {greetings()}!</h1>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
      <p>This is for personal use but IDK if you use it/take apart the code, have fun.</p>
    </div>
  );
}

export default AboutUs;