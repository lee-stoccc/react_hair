import React from 'react';
import './img_text.css'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

export default class Img_text extends React.Component {




    render() {
        // 跳转路由
        const goPaths=this.props.goPath?'/'+this.props.goPath:"/index";
        const classn=['icon_text'];
        classn.push(this.props.classes);
        return (
            <div className='img_text'  >
                <Link to={goPaths}  >
                    <div className={'num'}>{this.props.num}</div>
                    <div className='icon'><img src={this.props.imgsrc} alt=""/></div>
                    <div className={classn.join(' ')}>{this.props.imgtext}</div>
                </Link>
            </div>
        )
    }
}
