import { Fragment, useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import TableBody from "../component/Table/TableBody";
import TableHeader from "../component/Table/TableHeader";
import { getCountryData } from "../services/countriesService";
import Button from "../component/Button/Button";

const map = document.getElementById("svgMap");

const CountryReport = ({ match }) => {
  map.style.display = "none";
  const componentRef = useRef();
  const [countryData, setCountryData] = useState({
    name: "",
    population: "",
    size: "",
    domains: [],
  });

  useEffect(() => {
    const countryId = Number(match.params.id);
    const country = getCountryData(countryId);
    setCountryData(country);
  }, [match.params.id]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const columns = [
    {
      path: "name",
      label: "Category",
    },
    { path: "score", label: "Score" },
    { path: "action", label: "Action" },
    { path: "timeline", label: "Implementation Timeline" },
    { path: "responsible", label: "Responsible" },
  ];

  return (
    <Fragment>
      <div className="d-flex justify-content-between mb-4">
        <h3 className="mb-0 text-capitalize">{`${countryData.name} Report`}</h3>
        <Button label="Download PDF" onclick={handlePrint} />
      </div>

      <table className="table table-bordered" ref={componentRef}>
        <TableHeader columns={columns} />
        {countryData.domains.map((item, index) => (
          <Fragment key={index}>
            <tbody>
              <tr className="text-center text-primary">
                <td colSpan="6" className="text-uppercase">
                  {item.name}
                </td>
              </tr>
            </tbody>

            <TableBody columns={columns} data={item.categories} />
          </Fragment>
        ))}
      </table>
    </Fragment>
  );
};

export default CountryReport;
