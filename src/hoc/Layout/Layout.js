import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Table from '../../components/Table';
import * as actionData from '../../store/actions/index';
import { connect } from 'react-redux';

class Layout extends Component {

    state = {
        editing: false
    }

    componentDidMount() {
        console.log('Layout componentDidMount');
        this.props.onLoadDataBD();
    }

    componentDidUpdate() {
        console.log("Layout componentDidUpdate");
    }

    render() {

        return (
            <Wrapper>
                <div className="container">
                    <h1>React 'axios - redux'</h1>
                    <div className="row">
                        <Table
                            title='Usuarios'
                            data={this.props.data}
                            fncUpdate={this.props.onEdit}
                            fncRemove={this.props.onRemove}
                            fncSaveBD={this.props.onSaveBD} />
                    </div>
                </div>
            </Wrapper >
        )
    }
}

const mapStateToProps = state => {
    return {
        //TO USE: this.props.*
        data: state.data,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadDataBD: () => dispatch(actionData.loadDataBD()),
        onAdd: (data) => dispatch(actionData.addData(data)),
        onEdit: (data) => dispatch(actionData.updateDataBD(data)),
        onRemove: (data) => dispatch(actionData.removeData(data)),
        onSaveBD: (newData) => dispatch(actionData.saveDataBD(newData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);