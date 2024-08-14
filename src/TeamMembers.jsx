import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      handleEmployeeCardClick={handleEmployeeCardClick}
      employee={employee}
      selectedTeam={selectedTeam}
    />
  ));
};
export default TeamMembers;
