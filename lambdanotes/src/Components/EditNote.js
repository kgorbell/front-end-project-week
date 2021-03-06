import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { editSingleNote } from '../actions/index';
import { connect } from 'react-redux';


const Container = styled.form`
    width: 650px;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.input`
    width: 350px;
    height: 30px;
    border-radius: 2px;
    margin-bottom: 10px;
    padding-left: 15px;
`;

const Header = styled.h3`
    width: 100%;
`;

const Content = styled.textarea`
    width: 100%;
    height: 500px;
    border-radius: 2px;
    padding-left: 15px;
    padding-top: 15px
    line-height: 20px
    margin-bottom: 10px;
`;


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    saveChanges = e => {
        const note = {
            title: this.state.title,
            content: this.state.content,
            id: this.props.location.state.id
        }
        this.props.editSingleNote(note);
        this.setState({ title: '', content: ''});
    }
    
    render() {
        return (
            <Container>
                <Header>Edit Note:</Header>
                <Title 
                    type='text'
                    placeholder={this.props.location.state.title}
                    name='title'
                    value={this.state.title}
                    onChange={this.updateInputChange} 
                />
                <Content
                    type='text'
                    placeholder={this.props.location.state.content}
                    name='content'
                    value={this.state.content}
                    onChange={this.updateInputChange}
                />
                <Link 
                    to='/'
                    style={{ textDecoration: 'none', width: '175px', height: '20px', paddingTop: '10px', background: '#20AFB5', color: 'white', font: 'bold', fontSize: '14px', textAlign: 'center' }}
                    onClick={this.saveChanges}
                >
                    Update
                </Link>
            </Container>
        );
    }
}

export default connect(null, { editSingleNote })(EditNote);