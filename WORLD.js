// 월드 특수 NPC 스폰 비활성화
// USE_LOOP: true
SetPedModelIsSuppressed(GetHashKey('a_c_mtlion'), true)
SetPedModelIsSuppressed(GetHashKey('a_c_mtlion_02'), true)
SetPedModelIsSuppressed(GetHashKey('a_c_panther'), true)

SetVehicleModelIsSuppressed(GetHashKey('blimp'), true)
SetVehicleModelIsSuppressed(GetHashKey('blimp2'), true)
SetVehicleModelIsSuppressed(GetHashKey('blimp3'), true)

// 긴급 서비스 출동 NPC 비활성화
// USE_LOOP: true
for (let i = 1; i <= 15; i++) {
	EnableDispatchService(i, false)
}

const eDispatchType // i
{
	DT_Invalid = 0,
	DT_PoliceAutomobile = 1,
	DT_PoliceHelicopter = 2,
	DT_FireDepartment = 3,
	DT_SwatAutomobile = 4,
	DT_AmbulanceDepartment = 5,
	DT_PoliceRiders = 6,
	DT_PoliceVehicleRequest = 7,
	DT_PoliceRoadBlock = 8,
	DT_PoliceAutomobileWaitPulledOver = 9,
	DT_PoliceAutomobileWaitCruising = 10,
	DT_Gangs = 11,
	DT_SwatHelicopter = 13,
	DT_PoliceBoat = 14,
	DT_ArmyVehicle = 15,
	DT_BikerBackup = 15
};