<?php

namespace App\QueryBuilders;

use App\Models\RegistrationOrders;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class RegistrationOrdersQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = RegistrationOrders::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @param array $order_data
     * @return bool
     */
    function save(array $order_data): bool
    {
        $registration = new RegistrationOrders();
        if ($registration::create($order_data)) {
            return true;
        }
        return false;
    }
    /**
     * @param array $order_data
     * @return Collection
     */
    function checkAccountInEvent(array $order_data)
    {
        return $this->model
            ->where('event_id', $order_data['event_id'])
            ->where('account_id', $order_data['account_id'])
            ->get();
    }

    /**
     * @param array $order_data
     * @return bool
     */
    function delete(array $order_data): bool
    {
        if ($this->model
            ->where('event_id', $order_data['event_id'])
            ->where('account_id', $order_data['account_id'])
            ->delete()
        ) {
            return true;
        }
        return false;
    }

}