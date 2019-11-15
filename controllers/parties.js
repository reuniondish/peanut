// @desc    Get all parties
// @route   GET /api/v1/parties
// @access  Public
exports.getParties = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all parties'});
}

// @desc    Get a single party
// @route   GET /api/v1/parties/:id
// @access  Public
exports.getParty = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Get a party'
    });
}

// @desc    Create a new party
// @route   POST /api/v1/parties
// @access  Private
exports.createParty = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Create new party'
    });
}

// @desc    Update a party
// @route   PUT /api/v1/parties
// @access  Private
exports.updateParty = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update party ${req.params.id}`
    });
}

// @desc    Delete a party
// @route   DELETE /api/v1/parties
// @access  Private
exports.deleteParty = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete party ${req.params.id}`
    });
}