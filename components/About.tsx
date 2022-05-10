const Intro = () => {
    return(
        <div className="intro">
            <h2>Hello,</h2>
            <p>I'm Lakshay, an engineer from India. I build <a href="https://github.com/lakshaykananiya">open-source</a> and experiment with a few projects. For example, I recently built this portfolio website to showcase my skills. Here you'll find my learnings and sometimes non-tech articles.</p>
            <p>Currently, I'm pursuing my bachelor's degree from Chandigarh University. My first goal is to achieve financial freedom by doing the things I love and interest me the most and after that I plan to contibute to making this world as better place as I can by solving meaningful problems and also enjoying life alongside.</p>
            <i>Last Updated: May 10, 2022</i>
        </div>
    );
}

const About = () => {
    return(
        <div>
            <Intro />
        </div>
    );
}

export default About;