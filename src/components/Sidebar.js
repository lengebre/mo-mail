import { Button, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import {
  Add,
  Inbox,
  StarRate,
  WatchLater,
  LabelImportant,
  Send,
  InsertDriveFile,
  ExpandMore,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button>
        <Add fontSize="16px" />
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={77} selected={true} />
      <SidebarOption Icon={StarRate} title="Starred" number={5} />
      <SidebarOption Icon={WatchLater} title="Snoozed" number={5} />
      <SidebarOption Icon={LabelImportant} title="Important" number={5} />
      <SidebarOption Icon={Send} title="Sent" number={5} />
      <SidebarOption Icon={InsertDriveFile} title="Drafts" number={5} />
      <SidebarOption Icon={ExpandMore} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
