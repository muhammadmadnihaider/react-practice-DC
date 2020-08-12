import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {files.map((file) => (
          <FileListItem key={file.id} file={file} />
        ))}
      </tbody>
    </table>
  );
};

const FileListItem = ({ file }) => {
  return (
    <tr className="file-list-item">
      <FileName file={file} />
      <CommitMessage commit={file.latestCommit} />
      <td className="age">
        <Time time={file.updated_at} />
      </td>
    </tr>
  );
};
function FileIcon({ file }) {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}

function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  );
}
const CommitMessage = ({ commit }) => (
  <td className="commit-message">{commit.message}</td>
);

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
