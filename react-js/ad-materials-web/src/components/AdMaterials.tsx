import * as React from "react";
import { Table } from "react-bootstrap";
import { pure } from "recompose";

interface Props {
}
class AdMaterials extends React.Component<Props> {

    renderTbody() {
        return (
            <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                    <select>
                        <option value="new">New</option>
                        <option value="awaiting content">Awaiting Content</option>
                        <option value="content submitted">Content Submitted</option>
                        <option value="downloaded">Downloaded</option>
                        <option value="locked">Locked</option>
                    </select>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="app-container-wrapper">
                <div className="title-wrapper">
                    <div className="fixed-width">
                        <h1>Ad Materials</h1>
                    </div>
                </div>
                <div className="fixed-width">
                    <div className="ad-materials-table">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Order Date</th>
                                    <th>Student Last Name</th>
                                    <th>Student First Name</th>
                                    <th>Category</th>
                                    <th>Size</th>
                                    <th>Ad Purchased</th>
                                    <th>Ad Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTbody()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default pure(AdMaterials);