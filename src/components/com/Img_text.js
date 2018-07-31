import React from 'react';
import './img_text.css'
import { Link} from 'react-router-dom';

export default class Img_text extends React.Component {
    render() {
        // 跳转路由
        const goPaths=this.props.goPath?'/'+this.props.goPath:null;
        const classn=['icon_text'];
        classn.push(this.props.classes);

        const foot_class=['img_text'];
        foot_class.push(this.props.foot_class)
        return (
            <div className={foot_class.join(' ')}  onClick={this.props.Img_text_onClick}>
                {
                    goPaths?<Link to={goPaths}  >
                        <div className={'num'}>{this.props.num}</div>
                        <div className='icon'><img src={this.props.imgsrc} alt=""/></div>
                        <div className={classn.join(' ')}>{this.props.imgtext}</div>
                    </Link>:
                        <div>
                            <div className={'num'}>{this.props.num}</div>
                            <div className='icon'><img src={this.props.imgsrc} alt=""/></div>
                            <div className={classn.join(' ')}>{this.props.imgtext}</div>
                        </div>
                }
            </div>
        )
    }
}
