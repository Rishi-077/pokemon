import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { useDispatch } from "react-redux";
import { toggleLabel } from "../../services/Redux/LabelSlice";
import { Modal, Space, Table, Tag } from "antd";
import axios from "axios";
import { capitalizeFirstLetter } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLabel("Dashboard"));
    getData();
  }, [dispatch]);

  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [open, setOpen] = useState(false);

  const url = "https://pokeapi.co/api/v2/";

  function getData() {
    axios
      .get(`${url}pokemon?limit=100000&offset=0`)
      .then((r) => {
        if (r.status == 200) {
          setData(r.data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getSingleDetail(url) {
    axios
      .get(`${url}`)
      .then((r) => {
        if (r.status == 200) {
          console.log(r.data);
          setPokemon(r.data);
          setOpen(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <div className="fs-14 fw-500 uppercase">{text}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button
          className="btn radius-3 primary-bg white-text"
          onClick={() => getSingleDetail(record.url)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      ),
    },
  ];

  return (
    <>
      <section className={`${styles.dashboard_container} px-0 container-fluid`}>
        <div className="row">
          <div className="col-12 p-4">
            <h6 className="fs-16 fw-700">Dashboard</h6>
            <div className="card">
              <div className="card-body">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {pokemon ? (
        <Modal
          title={`${pokemon?.species?.name.toUpperCase()} DETAILS`}
          centered
          open={open}
          onOk={() => {
            setOpen(false);
            setPokemon(null);
          }}
          onCancel={() => {
            setOpen(false);
            setPokemon(null);
          }}
          footer={null}
          width={1000}
        >
          <div className={`${styles.pokemon_img}`}>
            <img src={pokemon.sprites.front_default} />
          </div>
          <div>
            <h6 className="fs-16 fw-500 blue-text">ABILITY</h6>

            <ul>
              {pokemon?.abilities.map((d, i) => (
                <>
                  <li key={i} className="fs-14 fw-500">
                    {capitalizeFirstLetter(d.ability.name)}
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="fs-16 fw-500 blue-text">FORMS</h6>
            <ul>
              {pokemon?.forms.map((d, i) => (
                <>
                  <li key={i} className="fs-14 fw-500">
                    {capitalizeFirstLetter(d.name)}
                  </li>
                </>
              ))}
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
