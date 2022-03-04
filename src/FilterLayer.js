import React from "react";
import { Box, Grid, Select, TextInput } from "grommet";
import { ColumnHeaders } from "./testdata";

const filterConfig = [
  {
    column1: {
      options: ColumnHeaders,
      defaultOptions: ColumnHeaders,
      labelKey: "header",
      valueKey: "property",
      value: "",
      search: true,
      multiple: false
    },
    column2: {
      options: [],
      defaultOptions: [],
      value: ""
    },
    column3: {}
  }
];

const filterOperatorOptions = {
  textinput: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    },
    {
      filterLabel: "Starts With",
      filterValue: "startsWith"
    },
    {
      filterLabel: "Ends With",
      filterValue: "endsWith"
    },
    {
      filterLabel: "Substring",
      filterValue: "Substring"
    },
    {
      filterLabel: "Contains",
      filterValue: "in"
    }
  ],
  number: [
    {
      filterLabel: "Greater Than",
      filterValue: "greaterThan"
    },
    {
      filterLabel: "Greater Than Equal To",
      filterValue: "greaterThanEqualTo"
    },
    {
      filterLabel: "Less Than",
      filterValue: "lessThan"
    },
    {
      filterLabel: "Less Than Equal To",
      filterValue: "lessThanEqualTo"
    },
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    }
  ],
  dropdown: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    }
  ],
  dateinput: [
    {
      filterLabel: "Between",
      filterValue: "between"
    }
  ]
};

export const FilterLayer = () => {
  return (
    <Grid columns={["small", "small", "small"]} gap="small">
      {filterConfig.map((config) => {
        console.log("Name >>>", config);
        if (config["column1"]) {
          let settings = config["column1"];
          return (
            <Box width="100%" direction="row-responsive">
              <Select
                placeholder={`Select ${settings.labelKey}`}
                labelKey={settings.labelKey}
                valueKey={settings.valueKey}
                options={settings.options || []}
                onChange={({ option }) =>
                  console.log("Selected options", option)
                }
              />
            </Box>
          );
        }

        if (config["column2"]) {
          return (
            <Box width="100%" direction="row">
              <Select options={["option1", "option2", "option3"]} />
            </Box>
          );
        }
      })}

      <Box width="100%" direction="row">
        <TextInput options={["option1", "option2", "option3"]} />
      </Box>
    </Grid>
  );
};
