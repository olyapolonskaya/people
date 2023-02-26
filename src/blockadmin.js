import './blockadmin.scss';
import {peopleList} from './modules/list';
import close from './img/close.png';


wp.blocks.registerBlockType('card/block',{
    title: 'Card block',
    icon: 'hammer',
    category: 'design',
    attributes: {
        users: {
            type:'string',
            default: 'piotr'
        }
    },
    edit(props) {
        const {attributes: {users}, setAttributes} = props;

        function setUsers(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes( {users: selected.value} );
            event.preventDefault();
        }
    
		return (
			<div className={props.className}>
                <form onSubmit={setUsers}>
                    <select value={users} onChange={setUsers}>
                        {peopleList.map((people) => (
                            <option value={people.name.toLowerCase()}>{people.name}</option>
                        ))}
                    </select>
                </form>
            </div>
		);
	},
	save(props) {
        const { attributes: { users } } = props;
        const selectedName = props.attributes.users;
        const user = peopleList.findIndex((index) => index.name.toLowerCase() === selectedName);
        const social = peopleList[user]['social'];
        return ( 
            <div className="user">
                    <img 
                        className="card__image" 
                        src={ peopleList[user]['image'] }
                        alt=""
                        aria-hidden="true"
                    />
                    <div className="info-block">
                        <div className="name">{peopleList[user]['fullname']}</div>
                        <div className="position">{peopleList[user]['position']}</div>
                    </div> 
                    
                <div className="user-modal">
                    <div className="modal-content">
                        <div className="name">{peopleList[user]['fullname']}</div>
                        <div className="description">{peopleList[user]['description']}</div>
                        <div className="social-wrapper">
                            {
                                social.map((socialItem) => (
                                    <div className="social-block">
                                        <a href={socialItem.soclink}>
                                            <img src={socialItem.socimg}  className="social-img" />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="close">
                            <img 
                                className="card__close" 
                                src={ cardBlock+close }
                                alt=""
                                aria-hidden="true"
                            /> 
                        </div>
                    </div>
                    <div className="fon">Fon</div>
                </div>
            </div> 
            
        );  
	},
});