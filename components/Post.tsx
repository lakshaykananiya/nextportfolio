import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Author = () => {
    return (
        <div className="author">
            <img src="../lakshaymittal.jpeg" />
            <div className="authorContent">
                <p>Hi, I'm Lakshay, an engineer from India.</p>
            </div>
        </div>
    );
}

const Related = () => {
    return (
        <div className="related">
            <h3>More articles</h3>
            <li><a>Changing text color dynamically depending on the background image</a></li>
            <li><a>Check if some element is false in an array in JavaScript</a></li>
            <li><a>Changing text color dynamically depending on the background image</a></li>
            <li><a>You always lose by arguing with other people</a></li>
            <li><a>Change dynamically from line to bar graph in Chart.js</a></li>
            <li><a>Changing text color dynamically depending on the background image</a></li>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="Footer">
            <div className="column">
                <a href='https://github.com/lakshaykananiya'>GitHub</a>
                <a href='https://stackoverflow.com/users/19084297/lakshay-kananiya'>StackOverflow</a>
            </div>
            <div className="column">
                <a href='https://www.linkedin.com/in/lakshaykananiya/'>LinkedIn</a>
                <a href='https://www.instagram.com/lakshaykananiya/'>Instagram</a>
                <a href='https://twitter.com/lakshaykananiya'>Twitter</a>
            </div>
        </div>
    );
}

const Post = (props) => {
    return (
        <>
            <div className="post">
                <div className="Header">
                    <h1>{props.data.title}</h1>
                    <div><time>{moment(props.data.date, "YYYY-MM-DD").format("MMM DD, YYYY")} · {props.data.readTime}</time></div>
                </div>
                <div className="content">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={props.data.content} />
                </div>
                <Author />
                {/*<Related />*/}
                <Footer />
            </div>
        </>
    );
}

export default Post;
