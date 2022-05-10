import { useState } from "react";
import moment from 'moment';

const Year = () => {
    return(
        <div className="year">2022</div>
    );
}

const Date = (props: any) => {
    return(
        <time className="date">{props.date}</time>
    );
}

const PostTitle = (props: any) => {
    return(
        <a href={"./"+props.link} className="postTitle">{props.title}</a>
    );
}

const Post = (props: any) => {
    return(
        <article className="post">
            <Date date={moment(props.data.date, "YYYY-MM-DD").format("MMM DD, YYYY")}/>
            <PostTitle title={props.data.title} link={props.data.id}/>
        </article>
    );
}

const ShowButton = (props: any) => {
    return(
        <button onClick={props.change}>
            <span>Show all</span>
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path></svg>
            <svg className="arrowHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13.03 8.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.47 9.28a.75.75 0 011.06-1.06l2.97 2.97V3.75a.75.75 0 011.5 0v7.44l2.97-2.97a.75.75 0 011.06 0z"></path></svg>
        </button>
    );
}

const ShowAll = (props: any) => {
    return(
        <div className="showAll">
            <hr />
            <ShowButton change={props.change}/>
        </div>
    )
}

const Blog = ({ postData } : {postData: any}) => {

    postData.sort((a: any, b: any) => {
        return new global.Date(b.date).valueOf() - new global.Date(a.date).valueOf();
    })
    
    const [show, setShow] = useState(false);
    const showChange = () => {
        setShow(true);
    }
    return(
        <div className="blog">
            <Year />
            {!show?postData.slice(0,15).map((p: any) => (<Post key={p.id} data={p}/>)):postData.map((p: any) => (<Post key={p.id} data={p}/>))}
            {!show&&(postData.length>15)?<ShowAll change={showChange}/>:null}
        </div>
    );
}

export default Blog;