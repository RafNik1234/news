import { Box, Typography } from "@mui/material";
import React from "react";
import {
  CalendarGrayBox,
  CalendarSelfBox,
  FlexAlignStart,
  FlexCenter,
  FlexSpaces,
} from "../elements/boxes";
import LanguageIcon from "@mui/icons-material/Language";
import ChatIcon from "@mui/icons-material/Chat";
import { ErrorAlert } from "../componets/alert/errorAlert";
import { WarningAlert } from "../componets/alert/warningAlert";

export const Calendar = () => {
  const tradeExItems = [
    { name: "CRGY", rate: "$0.17" },
    { name: "CRS", rate: "$0.2" },
    { name: "DLB", rate: "$0.25" },
    { name: "ENR", rate: "$0.3" },
    { name: "GER", rate: "$0.175" },
    { name: "GSL", rate: "$0.375" },
    { name: "NDSN", rate: "$0.17" },
    { name: "GER", rate: "$0.175" },
    { name: "GSL", rate: "$0.375" },
    { name: "NDSN", rate: "$0.17" },
    { name: "PRU", rate: "$0.65" },
    { name: "WELL", rate: "$1.2" },
    { name: "CNQ.CA", rate: "$0.17" },
    { name: "MFC.CA", rate: "$0.33" },
  ];
  return (
    <Box>
      <Typography variant="h4">American Weekly Calendar</Typography>
      <CalendarGrayBox>August 22</CalendarGrayBox>
      <FlexAlignStart marginY={"10px"}>
        <CalendarSelfBox bg="#F2F2F1">
          <FlexSpaces gap={"8px"} marginBottom={"10px"}>
            <Typography variant="h6">Economic</Typography>
            <LanguageIcon />
          </FlexSpaces>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexSpaces gap={"8px"}>
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="netflix"
                height="25px"
              />
              <Typography>some title we shoud</Typography>
            </FlexSpaces>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <Typography>some title we shoud</Typography>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexAlignStart gap={"8px"}>
              <img
                src="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"
                alt="netflix"
                height="20px"
              />
              <Typography>some describtion</Typography>
            </FlexAlignStart>
          </Box>
        </CalendarSelfBox>
        <CalendarSelfBox bg="#F2F2F1">
          <Typography variant="h6" marginBottom={"10px"}>
            Trades Ex-Divident
          </Typography>
          <FlexAlignStart gap="25px">
            <Box>
              {tradeExItems.slice(0, 7).map((el) => (
                <FlexSpaces key={el.name} gap="20px">
                  <Typography>{el.name}</Typography>
                  <Typography>{el.rate}</Typography>
                </FlexSpaces>
              ))}
            </Box>
            <Box>
              {tradeExItems.slice(8, tradeExItems.length - 1).map((el) => (
                <FlexSpaces key={el.name} gap="20px">
                  <Typography>{el.name}</Typography>
                  <Typography>{el.rate}</Typography>
                </FlexSpaces>
              ))}
            </Box>
          </FlexAlignStart>
        </CalendarSelfBox>
        <CalendarSelfBox bg="#F2F2F1">
          <Typography variant="h6" marginBottom={"10px"}>
            Trades Ex-Divident
          </Typography>
          <FlexAlignStart gap="8px">
            <Box borderRight="1px solid black" paddingRight="15px">
              {tradeExItems.slice(0, 4).map((el) => (
                <FlexSpaces key={el.name} gap="20px">
                  <Typography>{el.name}</Typography>
                  <Typography>{el.rate}</Typography>
                </FlexSpaces>
              ))}
            </Box>
            <Box>
              {tradeExItems.slice(3, 8).map((el) => (
                <FlexSpaces key={el.name} gap="20px">
                  <Typography>{el.name}</Typography>
                  <Typography>{el.rate}</Typography>
                </FlexSpaces>
              ))}
            </Box>
          </FlexAlignStart>
        </CalendarSelfBox>
        <Box>
          <CalendarSelfBox bg="#F0F4F8" marginBottom="10px">
            <Typography variant="h6" marginBottom={"10px"}>
              Political Events
            </Typography>
            <Typography>TBD German Chancellor Olaf Scholz</Typography>
            <Typography>travels to Canada(8/21-8/23)</Typography>
          </CalendarSelfBox>
          <CalendarSelfBox bg="#F0F4F8">
            <Typography variant="h6" marginBottom={"10px"} gap="10px">
              Political Events <ChatIcon />
            </Typography>
            <FlexCenter gap="10px">
              <img
                height="25px"
                alt="tube"
                src="https://spng.pngfind.com/pngs/s/302-3020719_youtube-music-logo-png-transparent-background-youtube-logo.png"
              />
              <Typography gap={"10px"}>
                TBD German Chancellor Olaf Scholz
              </Typography>
            </FlexCenter>
            <Typography>travels to Canada(8/21-8/23)</Typography>
          </CalendarSelfBox>
        </Box>
        <CalendarSelfBox bg="#F0F4F8">
          <Typography variant="h6" marginBottom={"10px"} gap="10px">
            Political Events <ChatIcon />
          </Typography>
          <FlexCenter gap="10px">
            <img
              height="25px"
              alt="tube"
              src="https://freepngimg.com/save/68257-account-google-icons-by-computer-inbox-icon/1024x453"
            />
            <Typography gap={"10px"}>
              TBD German Chancellor Olaf Scholz
            </Typography>
          </FlexCenter>
          <Typography>travels to Canada(8/21-8/23)</Typography>
        </CalendarSelfBox>
      </FlexAlignStart>
      <CalendarGrayBox>August 22</CalendarGrayBox>
      <FlexAlignStart marginY={"10px"}>
        <CalendarSelfBox bg="#F2F2F1">
          <FlexSpaces gap={"8px"} marginBottom={"10px"}>
            <Typography variant="h6">Economic</Typography>
          </FlexSpaces>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexSpaces gap={"8px"}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing industry.
              </Typography>
            </FlexSpaces>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing industry.
            </Typography>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexAlignStart gap={"8px"}>
              <img
                src="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"
                alt="netflix"
                height="20px"
              />
              <Typography>
                Lorem Ipsum is simply dummy text of the printing industry.
              </Typography>
            </FlexAlignStart>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexSpaces gap={"8px"}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing industry.
              </Typography>
            </FlexSpaces>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing industry.
            </Typography>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexSpaces gap={"8px"}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing industry.
              </Typography>
            </FlexSpaces>
          </Box>
          <Box margin="5px 0">
            <Typography>08:30ETD/13:30BST</Typography>
            <FlexAlignStart gap={"8px"}>
              <img
                src="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"
                alt="netflix"
                height="20px"
              />
              <Typography>
                Lorem Ipsum is simply dummy text of the printing industry.
              </Typography>
            </FlexAlignStart>
          </Box>
        </CalendarSelfBox>
        <Box>
          <CalendarSelfBox bg="#F2F2F1" marginBottom="10px">
            <Typography variant="h6" marginBottom={"10px"}>
              Trades Ex-Divident
            </Typography>
            <FlexAlignStart gap="25px">
              <Box>
                {tradeExItems.slice(0, 7).map((el) => (
                  <FlexSpaces key={el.name} gap="20px">
                    <Typography>{el.name}</Typography>
                    <Typography>{el.rate}</Typography>
                  </FlexSpaces>
                ))}
              </Box>
              <Box>
                {tradeExItems.slice(8, tradeExItems.length - 1).map((el) => (
                  <FlexSpaces key={el.name} gap="20px">
                    <Typography>{el.name}</Typography>
                    <Typography>{el.rate}</Typography>
                  </FlexSpaces>
                ))}
              </Box>
            </FlexAlignStart>
          </CalendarSelfBox>
          <CalendarSelfBox bg="#F2F2F1">
            <Typography variant="h6" marginBottom={"10px"}>
              Trades Ex-Divident
            </Typography>
            <FlexAlignStart gap="8px">
              <Box borderRight="1px solid black" paddingRight="15px">
                {tradeExItems.slice(0, 4).map((el) => (
                  <FlexSpaces key={el.name} gap="20px">
                    <Typography>{el.name}</Typography>
                    <Typography>{el.rate}</Typography>
                  </FlexSpaces>
                ))}
              </Box>
              <Box>
                {tradeExItems.slice(3, 8).map((el) => (
                  <FlexSpaces key={el.name} gap="20px">
                    <Typography>{el.name}</Typography>
                    <Typography>{el.rate}</Typography>
                  </FlexSpaces>
                ))}
              </Box>
            </FlexAlignStart>
          </CalendarSelfBox>
        </Box>
        <Box>
          <CalendarSelfBox bg="#F0F4F8" marginBottom="10px">
            <Typography variant="h6" marginBottom={"10px"}>
              Analyst/Investor
            </Typography>
            <Box margin="5px 0">
              <Typography>08-3EDT/13:30BST</Typography>
              <Typography>TBD German Chancellor Olaf Scholz</Typography>
            </Box>
            <Box margin="5px 0">
              <Typography>08-3EDT/13:30BST</Typography>
              <Typography>TBD German Chancellor Olaf Scholz</Typography>
            </Box>
            <Box margin="5px 0">
              <Typography>08-3EDT/13:30BST</Typography>
              <Typography>TBD German Chancellor Olaf Scholz</Typography>
            </Box>
            <Box margin="5px 0">
              <Typography>08-3EDT/13:30BST</Typography>
              <FlexCenter gap="10px">
                <img
                  height="25px"
                  alt="tube"
                  src="https://toppng.com/uploads/preview/paypal-logo-11609371786gw3pnuakfe.png"
                />
                <Typography gap={"10px"}>
                  TBD German Chancellor Olaf Scholz
                </Typography>
              </FlexCenter>
            </Box>
          </CalendarSelfBox>
          <CalendarSelfBox bg="#F0F4F8">
            <Typography variant="h6" marginBottom={"10px"} gap="10px">
              Speakers
            </Typography>
            <Typography>TBD German Chancellor Olaf Scholz</Typography>
            <Typography>TBD German Chancellor Olaf Scholz</Typography>
            <Box paddingLeft="15px">
              <img
                height="25px"
                alt="tube"
                src="https://toppng.com/uploads/preview/paypal-logo-11609371786gw3pnuakfe.png"
              />
            </Box>
            <Typography>travels to Canada(8/21-8/23)</Typography>
          </CalendarSelfBox>
        </Box>
        <CalendarSelfBox bg="#F0F4F8">
          <Typography variant="h6" marginBottom={"10px"} gap="10px">
            Political Events
          </Typography>
          <Typography marginBottom={"10px"}>
            TBD German Chancellor Olaf Scholz
          </Typography>
          <Typography marginBottom={"10px"}>
            TBD German Chancellor Olaf Scholz
          </Typography>
          <Typography marginBottom={"10px"}>
            TBD German Chancellor Olaf Scholz
          </Typography>
          <Typography marginBottom={"10px"}>
            TBD German Chancellor Olaf Scholz
          </Typography>
          <Typography marginBottom={"10px"}>
            TBD German Chancellor Olaf Scholz
          </Typography>
          <FlexCenter gap="10px">
            <img
              height="25px"
              alt="tube"
              src="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"
            />
            <Typography gap={"10px"}>
              TBD German Chancellor Olaf Scholz
            </Typography>
          </FlexCenter>
          <Typography>travels to Canada(8/21-8/23)</Typography>
        </CalendarSelfBox>
      </FlexAlignStart>
      <FlexAlignStart gap={"50px"}>
        <Box maxWidth={"500px"} marginTop={"20px"}>
          <ErrorAlert />
        </Box>
        <Box maxWidth={"500px"} marginTop="20px">
          <WarningAlert />
        </Box>
      </FlexAlignStart>
    </Box>
  );
};
