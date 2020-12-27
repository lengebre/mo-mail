import { Checkbox, IconButton } from "@material-ui/core";
import EmailRow from "./EmailRow";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import Section from "./Section";
import "./EmailList.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Email 1"
          subject="Subject 1"
          description="this is the description"
          time="10:15am"
        />
        <EmailRow
          title="Email 2"
          subject="Subject 2"
          description="this is the description"
          time="09:15am"
        />
        <EmailRow
          title="Email 3"
          subject="Subject 3"
          description="this is the description"
          time="08:15am"
        />
        <EmailRow
          title="Email 4"
          subject="Subject 4"
          description="this is the description"
          time="07:15am"
        />
      </div>
    </div>
  );
}

export default EmailList;
